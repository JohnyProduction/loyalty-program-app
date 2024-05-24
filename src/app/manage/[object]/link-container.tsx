'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { LinkDataType, LinkRecord } from '@/types/setting-types';
import { AccountType } from '@/types/login-types';
import { UserDbModel } from '@/types/user-types';
import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { Loader } from '@/components/common/loader';
import { LinkComponent } from '@/app/manage/[object]/link-component';

export const linksData: LinkDataType = {
    [AccountType.ADMINISTRATOR]: [
        { label: 'Users', path: '/users' },
        { label: 'Credits', path: '/credits' },
        { label: 'Organizations', path: '/organizations' },
        { label: 'Categories', path: '/categories' }
    ],
    [AccountType.MANAGER]: [
        { label: 'Users', path: '/users' },
        { label: 'Credits', path: '/credits' }
    ]
};

export function LinkContainer() {
    const [profile, setUser] = useState<UserDbModel>();

    useEffect(() => {
        User.getCurrentUserEnd().then(data => setUser(data));
    }, []);

    const renderLinks = () => {
        if (!profile) {
            return <Loader />;
        }

        const accountType = profile ? profile.type : AccountType.WORKER;

        if (accountType === AccountType.WORKER) {
            return;
        }

        const links: LinkRecord[] = linksData[accountType];

        return (
            <ul>
                {links.map(link => {
                    const { label, path } = link;

                    return <LinkComponent key={path} label={label} path={path} />;
                })}
            </ul>
        );
    };

    return (
        <div className={styles['link-container']}>
            {renderLinks()}
        </div>
    );
}