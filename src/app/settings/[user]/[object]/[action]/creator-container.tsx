import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';

interface CreatorContainerProps {
    user: string;
    object: string;
    action: string;
}

export function CreatorContainer({ user, object, action }: CreatorContainerProps) {
    return (
        <div className={styles['creator-container']}></div>
    );
}