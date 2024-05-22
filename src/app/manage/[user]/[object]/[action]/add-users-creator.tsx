'use client';

import { InputString } from '@/components/common/inputs/input-string';
import { useAddUsersCreator } from '@/hooks/manage-creators/use-add-users-creator';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { AccountType } from '@/types/login-types';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Login, Organization } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function AddUsersCreator() {
    const { username, onChangeUsername, password, onChangePassword, email, onChangeEmail, organization, onChangeOrganization, role, onChangeRole } = useAddUsersCreator();
    const [organizationOptions, setOrganizationOptions] = useState<OptionType[]>([]);
    const roleOptions: OptionType[] = [
        { id: 1, label: AccountType.ADMINISTRATOR, value: AccountType.ADMINISTRATOR },
        { id: 2, label: AccountType.MANAGER, value: AccountType.MANAGER },
        { id: 3, label: AccountType.WORKER, value: AccountType.WORKER }
    ];
    const { setIsLoading } = useContext(SettingsCreatorContext);

    useEffect(() => {
        const { getOrganizationsEnd } = Organization;

        getOrganizationsEnd()
            .then(data => {
                const options: OptionType[] = data.map((model, idx) => ({
                    id: idx,
                    label: model.name,
                    value: model.name
                }));

                setOrganizationOptions(options);
            });
    }, []);

    const onSubmit = () => {
        const { registerForAdminEnd } = Login;

        setIsLoading(true);
        registerForAdminEnd({
            username,
            password,
            email,
            accountType: role,
            organizationName: organization
        }).then(data => {
            toastSuccess(data);
        }).finally(() => setIsLoading(false));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Username'} name={'username'} value={username} onChange={onChangeUsername} />
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <InputSelect label={'Organization'} name={'organization'} value={organization} onChange={onChangeOrganization} options={organizationOptions} />
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={roleOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}