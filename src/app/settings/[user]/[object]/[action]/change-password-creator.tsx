'use client';

import { useState } from 'react';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { User } from '@/app/api/api';
import { toastSuccess } from '@/utils/toast-utils';

export function ChangePasswordCreator() {
    const [password, setPassword] = useState<string>('');

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        const { setPasswordEnd } = User;

        setPasswordEnd(password).then(data => toastSuccess(data));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}