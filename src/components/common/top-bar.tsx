'use client';

import styles from '@/styles/components/common/header.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Login, User } from '@/api/api';
import { createProfile, deleteProfile, getProfile } from '@/utils/user-utils';
import { useRouter } from 'next/navigation';
import { UserDbModel } from '@/types/user-types';
import { toastSuccess } from '@/utils/toast-utils';
import Link from 'next/link';
import { Loader } from '@/components/common/loader';
import { AccountType } from '@/types/login-types';
import { ProfileContext } from '@/contexts/profile-context';

export function TopBar() {
    const router = useRouter();
    const [user, setUser] = useState<UserDbModel>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(true);
    const profileProvider = useContext(ProfileContext);

    useEffect(() => {
        if (!user) {
            return;
        }

        if (user.type === AccountType.WORKER && location.pathname.startsWith('/manage')) {
            router.push('/');
        }

        if (user.type !== AccountType.ADMINISTRATOR && location.pathname === '/contact-us/manage') {
            router.push('/');
        }

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
        if (profileProvider) {
            profileProvider.setProfile(user);
        }
    }, [user]);

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
                        <li><a href='/categories'>Categories</a></li>
                        <li><a href='/shops'>Shops</a></li>
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
                                <p>{profileProvider ? profileProvider.profile?.credits : user?.credits} PKT</p>
                                <div className={styles['header__user-profile']}>
                                    <ul>
                                        <li>
                                            <a href="#">{user?.login}</a>
                                            <ul>
                                                <li><a href={'/settings'}>Settings</a></li>
                                                {user.type !== AccountType.WORKER && <li><Link href={'/manage'}>Manage</Link></li>}
                                                {user.type === AccountType.ADMINISTRATOR && <li><Link href={'/contact-us/manage'}>Contact management</Link></li>}
                                                <li><Link href={'/transactions'}>View transactions</Link></li>
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