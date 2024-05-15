'use client';

import { useContext, useEffect, useState } from 'react';
import { Organization, User } from '@/app/api/api';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { toastSuccess } from '@/utils/toast-utils';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { UserDbModel } from '@/types/user-types';
import { updateProfile } from '@/utils/user-utils';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function ChangeEmailCreator() {
    const [username, setUsername] = useState<string>('');
    const [users, setUsers] = useState<OptionType[]>([]);
    const [email, setEmail] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');
    const [organizations, setOrganizations] = useState<OptionType[]>([]);
    const { setIsLoading } = useContext(SettingsCreatorContext);

    const { getUsersEnd, editUserMailEnd } = User;
    const { getOrganizationsEnd } = Organization;

    useEffect(() => {
        getOrganizationsEnd()
            .then(data => {
                const organizations: OptionType[] = data.map((organization, idx) => ({
                    id: idx,
                    label: organization.name,
                    value: organization.name
                }));

                setOrganizations(organizations);

                getUsersEnd()
                    .then(data => {
                        const users: OptionType[] = data.map((user, idx) => ({
                            id: idx,
                            label: user.login,
                            value: user.login
                        }));

                        setUsers(users);
                    });
            });
    }, []);

    const onChangeOrganization = (e: any) => {
        setOrganization(e.target.value);
    };

    const onChangeUsername = (e: any) => {
        const login = e.target.value;
        const user = users.find(option => option.label === login);

        setUsername(user!.label);
    };

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const onSubmit = async () => {
        setIsLoading(true);

        const users = await getUsersEnd(organization);
        const user = users.find(user => user.login === username) as UserDbModel;

        user.latestUpdate = new Date();
        user.email = email;
        updateProfile(user);

        const res = await editUserMailEnd(user);
        toastSuccess(res);
        setIsLoading(false);
    };

    return (
        <form className={styles['creator-form']}>
            <InputSelect label={'Organization'} name={'organization'} options={organizations} value={organization} onChange={onChangeOrganization} />
            <InputSelect label={'User'} name={'user'} options={users} value={username} onChange={onChangeUsername} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}