import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { AddUsersCreator } from '@/app/settings/[user]/[object]/[action]/add-users-creator';
import { AddCreditsCreator } from '@/app/settings/[user]/[object]/[action]/add-credits-creator';
import { AddOrganizationsCreator } from '@/app/settings/[user]/[object]/[action]/add-organizations-creator';
import { AddManagerUsersCreator } from '@/app/settings/[user]/[object]/[action]/add-manager-users-creator';
import { ChangePasswordCreator } from '@/app/settings/[user]/[object]/[action]/change-password-creator';
import { ChangeEmailCreator } from '@/app/settings/[user]/[object]/[action]/change-email-creator';

interface CreatorContainerProps {
    user: string;
    object: string;
    action: string;
}

export function CreatorContainer({ user, object, action }: CreatorContainerProps) {
    const renderContainer = (user: string, object: string, action: string) => {
        if (user === 'admin' && object === 'users' && action === 'add') {
            return <AddUsersCreator />;
        }

        if (user === 'admin' && object === 'credits' && action === 'add') {
            return <AddCreditsCreator />;
        }

        if (user === 'admin' && object === 'organizations' && action === 'add') {
            return <AddOrganizationsCreator />;
        }

        if (user === 'manager' && object === 'users' && action === 'add') {
            return <AddManagerUsersCreator />;
        }

        if (user === 'manager' && object === 'credits' && action === 'add') {
            return <AddCreditsCreator />;
        }

        if (user === 'manager' && object === 'password' && action === 'change') {
            return <ChangePasswordCreator />;
        }

        if (user === 'worker' && object === 'password' && action === 'change') {
            return <ChangePasswordCreator />;
        }

        if (user === 'worker' && object === 'email' && action === 'change') {
            return <ChangeEmailCreator />;
        }

        return <>Unknown creator.</>;
    };

    return (
        <div className={styles['creator-container']}>
            {renderContainer(user, object, action)}
        </div>
    );
}