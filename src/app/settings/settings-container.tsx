'use client';

import styles from '@/styles/app/settings/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { useUserSettings } from '@/hooks/use-user-settings';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { Loader } from '@/components/common/loader';

export function SettingsContainer() {
    const {
        email, onChangeEmail, onSubmitEmail, isProceedingEmail,
        password, onChangePassword, onSubmitPassword, isProceedingPassword,
        isFetchingUser
    } = useUserSettings();

    const emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <div className={styles['settings-container']}>
            {(isProceedingEmail || isProceedingPassword) && <Loader isAbsolute={true} />}
            {isFetchingUser && <Loader isAbsolute={true} />}
            <div>
                <h3>User's settings</h3>
                <div className={styles['settings-section']}>
                    <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} width={'500px'} isValid={emailRegexp.test(email)} />
                    <div className={styles['settings-section__button']}>
                        <SubmitButton label={'Change email'} onSubmit={onSubmitEmail} size={'small'} />
                    </div>
                </div>
                <div className={styles['settings-section']}>
                    <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} isPassword={true} />
                    <div className={styles['settings-section__button']}>
                        <SubmitButton label={'Change password'} onSubmit={onSubmitPassword} size={'small'} />
                    </div>
                </div>
            </div>
        </div>
    );
}