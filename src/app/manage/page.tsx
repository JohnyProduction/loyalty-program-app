'use client';

import styles from '@/styles/app/manage/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserDbModel } from '@/types/user-types';
import { User } from '@/api/api';
import { linksData } from '@/app/manage/x/[user]/[object]/[action]/link-container';
import { AccountType } from '@/types/login-types';
import { redirect } from 'next/navigation';
import { Loader } from '@/components/common/loader';

export default function ManagePage() {
    const [user, setUser] = useState<UserDbModel>();

    useEffect(() => {
        User.getCurrentUserEnd()
            .then(data => setUser(data))
            .catch(err => {});
    }, []);

    const renderLinks = () => {
        if (!user) {
            return <></>;
        }

        if (user.type === AccountType.WORKER) {
            redirect('/');
        }

        const links = linksData[user.type];

        return (
            <ul>
                {links.map(link => {
                    return (
                        <Link href={`/manage/${user.type}/${link.path}`}>
                            <li>{link.label}</li>
                        </Link>
                    );
                })}
            </ul>
        );
    };

    return (
        <main className={styles['manage-page']}>
            <TopBar />
            <PageBox>
                {user ?
                    <div className={styles['creator-container']}>
                        <h3>Management</h3>
                        {renderLinks()}
                    </div> :
                    <Loader isAbsolute={true} />
                }
                <Footer />
            </PageBox>
        </main>
    );
}