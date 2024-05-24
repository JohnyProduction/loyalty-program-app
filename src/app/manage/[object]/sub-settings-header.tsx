import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';

interface SubSettingsHeaderProps {
    object: string;
}

export function SubSettingsHeader({ object }: SubSettingsHeaderProps) {
    return <h1 className={styles['sub-settings-header']}>Manage {object}</h1>;
}