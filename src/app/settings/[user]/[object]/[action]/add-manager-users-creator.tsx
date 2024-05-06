'use client';

import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useAddUsersCreator } from '@/hooks/settings-creators/use-add-users-creator';
import { AccountTypes } from '@/types/login-types';
import { User } from '@/app/api/api';
import { toastSuccess } from '@/utils/toast-utils';

export function AddManagerUsersCreator() {
    const { username, onChangeUsername, password, onChangePassword, email, onChangeEmail, role, onChangeRole } = useAddUsersCreator();
    const roleOptions: OptionType[] = [
        { id: 2, label: AccountTypes.MANAGER, value: AccountTypes.MANAGER },
        { id: 3, label: AccountTypes.WORKER, value: AccountTypes.WORKER }
    ];

    const onSubmit = () => {
        const { addUserEnd } = User;

        addUserEnd({ username, password, email, accountType: role }).then(data => toastSuccess(data));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Username'} name={'username'} value={username} onChange={onChangeUsername} />
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={roleOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}