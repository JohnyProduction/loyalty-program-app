import React from 'react';
import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/addUser/page.module.scss';
export default function AddUserPage() {

    const newUser={
        username: '',
        password: '',
        accountType: 'Administrator',
        email: ''
    };

    return (
        <>
            <TopBar />
            <main className={styles['main-page']}>
                <div className={styles['addUser-page__container']}>
                    <form>
                        <div>
                            <h3>Panel dodawania administratorów</h3>
                            <div className={styles['addUser-page__custom-inputs']}>
                                <label htmlFor="username">Nazwa użytkownika:</label>
                                <input placeholder='Nazwa użytkownika' type='text' name='username' value={newUser.username}  />
                            </div>
                            <label htmlFor="password">Hasło użytkownika:</label>
                            <input placeholder='Hasło użytkownika' type='password' name='password' value={newUser.password}  />
                            <label htmlFor="email">Email użytkownika:</label>
                            <input placeholder='Email użytkownika' type='email' name='email' value={newUser.email}  />
                        </div>
                        <button type="submit">Dodaj</button>
                    </form>
                </div>
            </main>
        </>
    );
}
