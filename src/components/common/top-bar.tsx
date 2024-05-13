'use client';

import styles from '@/styles/components/common/header.module.scss';
import { useEffect, useState } from 'react';
import { Login } from '@/app/api/api';
import { deleteProfile, getProfile } from '@/utils/user-utils';
import { useRouter } from 'next/navigation';
import { UserDbModel } from '@/types/user-types';
import { toastSuccess } from '@/utils/toast-utils';

export function TopBar() {
    const router = useRouter();
    const [user, setUser] = useState<UserDbModel>();

    useEffect(() => {
        const profile = getProfile() as UserDbModel;

        setUser(profile);
    }, [localStorage.getItem('user')]);

    const onLogOut = async () => {
        deleteProfile();

        try {
            await Login.logoutEnd();
        } catch (e) { /* empty */ } finally {
            router.push('/login');
            router.refresh();
            toastSuccess('Logged out succeed!');
        }
    };

    return (
        <header className={styles['header']}>
            <span></span>
            <div className={styles['header__search-container']}>
                <div className={styles['header__search-menu-container']}>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#'>Sport</a></li>
                        <li><a href='#'>Life</a></li>
                        <li><a href='#'>Health</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles['header__user-container']}>
                {user ?
                    <>
                        <p>{user?.credits} PKT</p>
                        <div className={styles['header__user-profile']}>
                            <ul>
                                <li>
                                    <a href="#">{user?.login}</a>
                                    <ul>
                                        <li><a href={`/settings/${user?.type}/users/add`}>Settings</a></li>
                                        <li onClick={onLogOut}><a href='#'>Logout</a></li>
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