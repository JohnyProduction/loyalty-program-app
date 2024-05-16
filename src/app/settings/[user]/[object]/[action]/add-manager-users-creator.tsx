'use client';

import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useAddUsersCreator } from '@/hooks/settings-creators/use-add-users-creator';
import { AccountType } from '@/types/login-types';
import { User } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { useContext } from 'react';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function AddManagerUsersCreator() {
    const { username, onChangeUsername, password, onChangePassword, email, onChangeEmail, role, onChangeRole } = useAddUsersCreator();
    const { setIsLoading } = useContext(SettingsCreatorContext);
    const roleOptions: OptionType[] = [
        { id: 2, label: AccountType.MANAGER, value: AccountType.MANAGER },
        { id: 3, label: AccountType.WORKER, value: AccountType.WORKER }
    ];

    const onSubmit = () => {
        const { addUserEnd } = User;

        setIsLoading(true);
        addUserEnd({ username, password, email, accountType: role })
            .then(data => toastSuccess(data))
            .finally(() => setIsLoading(false));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Username'} name={'username'} value={username} onChange={onChangeUsername} />
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={roleOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}