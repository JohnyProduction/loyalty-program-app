'use client';

import styles from '@/styles/components/common/header.module.scss';
import { useEffect, useState } from 'react';
import { Login, User } from '@/app/api/api';
import { createProfile, deleteProfile, getProfile } from '@/utils/user-utils';
import { redirect } from 'next/navigation';

export function TopBar() {
    const [username, setUsername] = useState('');
    const [credits, setCredits] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        User.getCurrentUserEnd()
            .then(user => {
                setIsLogged(true);
                setUsername(user.login);
                setCredits(user.credits.toString());

                createProfile(user);
            })
            .catch(error => {
                if (error instanceof Response && error.status === 401) {
                    setIsLogged(false);
                    deleteProfile();
                    redirect('/login');
                }
            });
    }, []);

    return (
        <header className={styles['header']}>
            <span></span>
            <div className={styles['header__search-container']}>
                <div className={styles['header__search']}>
                    <div>Search</div>
                </div>
                <div className={styles['header__search-menu-container']}>
                    <ul>
                        <li>Menu item 1</li>
                        <li>Menu item 1</li>
                        <li>Menu item 1</li>
                    </ul>
                </div>
            </div>
            <div className={styles['header__user-container']}>
                {isLogged ?
                    <>
                        <p>{credits} PKT</p>
                        <div className={styles['header__user-profile']}>
                            <ul>
                                <li>
                                    <a href="#">{username}</a>
                                    <ul>
                                        <li><a href={`/settings/${getProfile()?.type}/users/add`}>Settings</a></li>
                                        <li onClick={() => Login.logoutEnd().then(() => {window.location.reload();})}><a href='#'>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </>
                    :
                    <div className={styles['header__user-profile']}><a href='/login'>Sign in</a></div>
                }
            </div>
        </header>
    );
}