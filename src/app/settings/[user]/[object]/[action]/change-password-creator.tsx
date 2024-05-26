'use client';

import { useContext, useState } from 'react';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { User } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function ChangePasswordCreator() {
    const [password, setPassword] = useState<string>('');
    const { setIsLoading } = useContext(SettingsCreatorContext);

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        const { setPasswordEnd } = User;

        setIsLoading(true);
        setPasswordEnd(password)
            .then(data => toastSuccess(data))
            .finally(() => setIsLoading(false));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}