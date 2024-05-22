'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { LinkDataType, LinkRecord } from '@/types/setting-types';
import { LinkComponent } from '@/app/manage/[user]/[object]/[action]/link-component';
import { AccountType } from '@/types/login-types';
import { getProfile } from '@/utils/user-utils';
import { UserDbModel } from '@/types/user-types';
import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { Loader } from '@/components/common/loader';

interface LinkContainerProps {
    user: string;
    object: string;
    action: string;
}

export const linksData: LinkDataType = {
    [AccountType.ADMINISTRATOR]: [
        { label: 'add users', path: '/users/add' },
        { label: 'add credits', path: '/credits/add' },
        { label: 'add organizations', path: '/organizations/add' },
        { label: 'add categories', path: '/categories/add' },
        { label: 'change email', path: '/email/change' }
    ],
    [AccountType.MANAGER]: [
        { label: 'add users', path: '/users/add' },
        { label: 'add credits', path: '/credits/add' },
        { label: 'change email', path: '/email/change' }
    ]
};

export function LinkContainer({ user, object, action }: LinkContainerProps) {
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

                    return <LinkComponent key={path} label={label} path={path} user={user} />;
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