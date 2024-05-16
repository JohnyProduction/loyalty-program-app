'use client';

import styles from '@/styles/components/common/header.module.scss';
import { useEffect, useState } from 'react';
import { Login, User } from '@/api/api';
import { createProfile, deleteProfile, getProfile } from '@/utils/user-utils';
import { useRouter } from 'next/navigation';
import { UserDbModel } from '@/types/user-types';
import { toastSuccess } from '@/utils/toast-utils';
import Link from 'next/link';
import { Loader } from '@/components/common/loader';

export function TopBar() {
    const router = useRouter();
    const [user, setUser] = useState<UserDbModel>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(true);

    useEffect(() => {
        User.getCurrentUserEnd()
            .then(data => {
                setUser(data);
                createProfile(data);
            })
            .catch(err => {
                if (err.status === 401) {
                    router.push('/login');
                    router.refresh();
                }
            });
    }, []);

    useEffect(() => {
        setIsLoadingProfile(true);
        const profile = getProfile() as UserDbModel;

        setUser(profile);
        setIsLoadingProfile(false);
    }, [process.browser ? sessionStorage.getItem('user') : '']);

    const onLogOut = async () => {
        deleteProfile();

        try {
            setIsLoading(true);
            await Login.logoutEnd();
        } catch (e) { /* empty */ } finally {
            router.push('/login');
            router.refresh();
            toastSuccess('Logged out succeed!');
            setIsLoading(false);
        }
    };

    return (
        <header className={styles['header']}>
            {isLoading && <Loader isAbsolute={true} />}
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
                {isLoadingProfile ?
                    <Loader />
                    :
                    (
                        user ?
                            <>
                                <p>{user?.credits} PKT</p>
                                <div className={styles['header__user-profile']}>
                                    <ul>
                                        <li>
                                            <a href="#">{user?.login}</a>
                                            <ul>
                                                <li><a href={`/settings/${user?.type}/users/add`}>Settings</a></li>
                                                <li><Link href={'/manage'}>Manage</Link></li>
                                                <li onClick={onLogOut}><a href='#'>Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            :
                            <div className={styles['header__user-profile']}><a href='/login'>Sign in</a></div>
                    )
                }
            </div>
        </header>
    );
}