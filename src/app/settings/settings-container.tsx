'use client';

import styles from '@/styles/app/settings/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { useUserSettings } from '@/hooks/use-user-settings';
import { SubmitButton } from '@/components/common/buttons/submit-button';

export function SettingsContainer() {
    const { email, onChangeEmail, onSubmitEmail, password, onChangePassword, onSubmitPassword } = useUserSettings();

    return (
        <div className={styles['settings-container']}>
            <div className={styles['settings-section']}>
                <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
                <div className={styles['settings-section__button']}>
                    <SubmitButton label={'Change email'} onSubmit={onSubmitEmail} size={'small'} />
                </div>
            </div>
            <div className={styles['settings-section']}>
                <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
                <div className={styles['settings-section__button']}>
                    <SubmitButton label={'Change password'} onSubmit={onSubmitPassword} size={'small'} />
                </div>
            </div>
        </div>
    );
}