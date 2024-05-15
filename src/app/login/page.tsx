'use client';

import React, { useState } from 'react';
import styles from '@/styles/app/login/page.module.scss';
import { Login, User } from '../api/api';
import { useRouter } from 'next/navigation';
import { createProfile } from '@/utils/user-utils';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { Loader } from '@/components/common/loader';

export default function LoginPage() {
    const [loginValue, setLoginValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async () => {
        if (loginValue.trim() === '' || passValue.trim() === '') {
            return;
        }

        try {
            setIsLoading(true);
            await Login.loginEnd({
                username: loginValue,
                password: passValue
            });
            const user = await User.getCurrentUserEnd();
            createProfile(user);
            router.push('/');
            toastSuccess('Logged in succeed!');
        } catch (e: any) {
            toastError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    };

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassValue(event.target.value);
    };

    return (
        <main className={styles['main-page']}>
            {isLoading && <Loader isAbsolute={true} />}
            <div className={styles['login-page__container']}>
                <div className={styles['login-page__leftbox']}>
                </div>
                <div className={styles['login-page__rightbox']}>
                    <div className={styles['form-container']}>
                        <h4>System <span>lojalnościowy</span></h4>
                        <p>Witaj ponownie! Zaloguj się aby poznać nowości w naszej ofercie:</p>
                        <div className={styles['login-page__floating-labels']}>
                            <input placeholder="Login" type="text" name="login" value={loginValue} onChange={handleLoginChange} required />
                            <label htmlFor="login">Login:</label>
                        </div>
                        <div className={styles['login-page__floating-labels']}>
                            <input placeholder="Password" type="password" name="password" value={passValue} onChange={handlePassChange} required />
                            <label htmlFor="password">Hasło:</label>
                        </div>
                        <button type="submit" onClick={handleSubmit}>Zaloguj</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
