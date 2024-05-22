'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { LinkDataType, LinkRecord } from '@/types/setting-types';
import { LinkComponent } from '@/app/manage/[user]/[object]/[action]/link-component';
import { AccountType } from '@/types/login-types';
import { getProfile } from '@/utils/user-utils';
import { UserDbModel } from '@/types/user-types';

interface LinkContainerProps {
    user: string;
    object: string;
    action: string;
}

export function LinkContainer({ user, object, action }: LinkContainerProps) {
    const data: LinkDataType = {
        [AccountType.ADMINISTRATOR]: [
            { label: 'add users', path: '/users/add' },
            { label: 'add credits', path: '/credits/add' },
            { label: 'add organizations', path: '/organizations/add' },
            { label: 'add categories', path: '/categories/add' },
            // { label: 'change password', path: '/password/change' },
            { label: 'change email', path: '/email/change' }
        ],
        [AccountType.MANAGER]: [
            { label: 'add users', path: '/users/add' },
            { label: 'add credits', path: '/credits/add' },
            // { label: 'change password', path: '/password/change' },
            { label: 'change email', path: '/email/change' }
        ],
        // [AccountType.WORKER]: [
        //     { label: 'change password', path: '/password/change' }, //settings
        //     { label: 'change email', path: '/email/change' } // settings
        // ]
    };

    const renderLinks = () => {
        const profile: UserDbModel = getProfile() as UserDbModel;
        const accountType = profile ? profile.type : AccountType.WORKER;

        const links: LinkRecord[] = data[accountType];

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