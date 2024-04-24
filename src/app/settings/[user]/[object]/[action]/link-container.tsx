import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';

interface LinkContainerProps {
    user: string;
    object: string;
    action: string;
}

export function LinkContainer({ user, object, action }: LinkContainerProps) {
    return (
        <div className={styles['link-container']}></div>
    );
}