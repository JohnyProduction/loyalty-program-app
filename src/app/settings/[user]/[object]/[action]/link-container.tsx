import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { LinkDataType } from '@/types/setting-types';
import { LinkComponent } from '@/app/settings/[user]/[object]/[action]/link-component';

interface LinkContainerProps {
    user: string;
    object: string;
    action: string;
}

export function LinkContainer({ user, object, action }: LinkContainerProps) {
    const data: LinkDataType[] = [
        {
            user: 'admin',
            links: [
                { label: 'add admin users', path: '/users/add' },
                { label: 'add credits', path: '/credits/add' },
                { label: 'add organizations', path: '/organizations/add' },
            ]
        },
        {
            user: 'manager',
            links: [
                { label: 'add workers', path: '/workers/add' },
                { label: 'add managers', path: '/managers/add' },
                { label: 'add credits', path: '/credits/add' },
                { label: 'change password', path: '/password/change' },
            ]
        },
        {
            user: 'worker',
            links: [
                { label: 'change password', path: '/password/change' },
                { label: 'change email', path: '/email/change' }
            ]
        }
    ];

    return (
        <div className={styles['link-container']}>
            <ul>
                {data.map(dataLink => {
                    const { user, links } = dataLink;

                    return (
                        <li key={user}>
                            <p>{user}</p>
                            <ul>
                                {links.map(link => {
                                    const { label, path } = link;

                                    return <LinkComponent key={path} label={label} path={path} user={user} />;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}