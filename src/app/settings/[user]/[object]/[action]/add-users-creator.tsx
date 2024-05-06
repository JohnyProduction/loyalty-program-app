'use client';

import { InputString } from '@/components/common/inputs/input-string';
import { useAddUsersCreator } from '@/hooks/settings-creators/use-add-users-creator';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { AccountTypes } from '@/types/login-types';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { useEffect, useState } from 'react';
import { Login, Organization } from '@/app/api/api';
import { toastSuccess } from '@/utils/toast-utils';

export function AddUsersCreator() {
    const { username, onChangeUsername, password, onChangePassword, email, onChangeEmail, organization, onChangeOrganization, role, onChangeRole } = useAddUsersCreator();
    const [organizationOptions, setOrganizationOptions] = useState<OptionType[]>([]);
    const roleOptions: OptionType[] = [
        { id: 1, label: AccountTypes.ADMINISTRATOR, value: AccountTypes.ADMINISTRATOR },
        { id: 2, label: AccountTypes.MANAGER, value: AccountTypes.MANAGER },
        { id: 3, label: AccountTypes.WORKER, value: AccountTypes.WORKER }
    ];

    useEffect(() => {
        const { getOrganizationsEnd } = Organization;

        getOrganizationsEnd().then(data => {
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

        registerForAdminEnd({
            username,
            password,
            email,
            accountType: role,
            organizationName: organization
        }).then(data => {
            toastSuccess(data);
        });
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Username'} name={'username'} value={username} onChange={onChangeUsername} />
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <InputSelect label={'Organization'} name={'organization'} value={organization} onChange={onChangeOrganization} options={organizationOptions} />
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={roleOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}