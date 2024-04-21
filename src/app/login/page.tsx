'use client';
import React, { useState } from 'react';
import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/login/page.module.scss';
import { Login } from '../api/api';
export default function LoginPage() {
    const [loginValue, setLoginValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
    const userData = {
        username: '',
        password: ''
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (loginValue.trim() === '' || passValue.trim() === '') {
            document.write('Submitted value:', loginValue, passValue);
        } else {
            userData.username = loginValue;
            userData.password = passValue;
            Login.loginEnd(userData);
            event.preventDefault();
        }

    };
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    };
    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassValue(event.target.value);
    };

    return (
        <>
            <TopBar />
            <main className={styles['main-page']}>
                <div className={styles['login-page__container']}>
                    <div className={styles['login-page__leftbox']}>
                    </div>
                    <div className={styles['login-page__rightbox']}>
                        <form onSubmit={handleSubmit}>
                            <h4>System <span>lojalnościowy</span></h4>
                            <p>Witaj ponownie! Zaloguj się aby poznać nowości w naszej ofercie:</p>
                            <div className={styles['login-page__floating-labels']}>
                                <input placeholder="Login" type="text" name="login" value={loginValue} onChange={handleLoginChange} />
                                <label htmlFor="login">Login:</label>
                            </div>
                            <div className={styles['login-page__floating-labels']}>
                                <input placeholder="Password" type="password" name="password" value={passValue} onChange={handlePassChange} />
                                <label htmlFor="password">Hasło:</label>
                            </div>
                            <button type="submit">Zaloguj</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
