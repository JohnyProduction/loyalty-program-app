'use client';
import styles from '@/styles/components/common/header.module.scss';
import { useEffect, useState } from 'react';
import { Login, User } from '@/app/api/api';
export function TopBar() {

    let userData;
    let isLogged=true;

    useEffect(() => {
        //isLogged = Login.isLoggedInEnd();
        userData = User.getCurrentUserEnd();
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
                    <><p>{userData.credits} PKT</p>
                        <div className={styles['header__user-profile']}>
                            <ul>
                                <li> {/*userData.login*/}</li>
                                <li>
                                    <ul>
                                        <li>Settings</li>
                                        <span></span>
                                        <li>Logout</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </>
                    :
                    <> <div className={styles['header__user-profile']}>Sign in</div></>
                }
            </div>
        </header>
    );
}