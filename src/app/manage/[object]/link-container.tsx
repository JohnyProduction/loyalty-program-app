'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { LinkDataType, LinkRecord } from '@/types/setting-types';
import { AccountType } from '@/types/login-types';
import { UserDbModel } from '@/types/user-types';
import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { Loader } from '@/components/common/loader';
import { LinkComponent } from '@/app/manage/[object]/link-component';

export const linksData: LinkDataType = {
    [AccountType.ADMINISTRATOR]: [
        { label: 'add users', path: '/users/add' },
        { label: 'add credits', path: '/credits/add' },
        { label: 'add organizations', path: '/organizations/add' },
        { label: 'add categories', path: '/categories/add' }
    ],
    [AccountType.MANAGER]: [
        { label: 'add users', path: '/users/add' },
        { label: 'add credits', path: '/credits/add' }
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

                    return <LinkComponent key={path} label={label} path={path} user={profile.type} />;
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