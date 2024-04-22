'use client';
import React, { useState } from 'react';
import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/add-user/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect } from '@/components/common/inputs/input-select';
import { User } from '../api/api';
import { AccountTypes } from '@/types/login-types';
export default function AddUserPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [role, setRole] = useState('');
    const newUser={
        username: '',
        password: '',
        accountType: AccountTypes.ADMINISTRATOR,
        email: ''
    };
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (username.trim() !== '' || password.trim() !== '' || email.trim() !== '') {
            newUser.username = username;
            newUser.password = password;
            newUser.email = email;
            User.addUserEnd(newUser);
            event.preventDefault();
        }

    };

    return (
        <>
            <TopBar />
            <main className={styles['main-page']}>
                <div className={styles['addUser-page__container']}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles['addUser-page__custom-inputs']}>
                            <h3>Panel dodawania użytkowników</h3>
                            <InputString label='Nazwa użytkownika' name='username' value={username} onChange={handleUsernameChange} />
                            <InputString label='Hasło użytkownika' name='password' value={password} onChange={handlePasswordChange} />
                            <InputString label='Email użytkownika' name='email' value={email} onChange={handleEmailChange} />
                            <button type="submit">Dodaj</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
