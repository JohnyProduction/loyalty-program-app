'use client';
import React, { useState } from 'react';
import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/login/page.module.scss';

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
            fetchUserLogIn();
            event.preventDefault();
            //document.write('Submitted value:', loginValue, passValue);
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
                    {//--><button onClick={() => checkLoggedInStatus()}>Test</button>
                    }
                </div>
            </main>
        </>
    );
    async function fetchUserLogIn() {
        try {
            const response = await fetch('https://lojback.ne-quid-nimis.pl/api/Login/Login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                credentials: 'include',
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }
        } catch (error) {
            throw new Error('Failed to log in');
            console.log('Error logging in:', error);
        }
    }/*
    function checkLoggedInStatus() {
        try {
            const response =  fetch('https://lojback.ne-quid-nimis.pl/api/Login/IsLoggedIn', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                mode: 'cors'
            });

            console.log('Logged in status:', response);
        } catch (error) {
            console.error('Error checking logged in status:', error);
        }
    }*/
}
