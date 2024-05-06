import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { AddUsersCreator } from '@/app/settings/[user]/[object]/[action]/add-users-creator';
import { AddCreditsCreator } from '@/app/settings/[user]/[object]/[action]/add-credits-creator';

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

        return <>Unknown creator.</>;
    };

    return (
        <div className={styles['creator-container']}>
            {renderContainer(user, object, action)}
        </div>
    );
}