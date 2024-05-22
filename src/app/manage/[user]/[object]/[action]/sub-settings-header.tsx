import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';

interface SubSettingsHeaderProps {
    object: string;
    action: string;
}

export function SubSettingsHeader({ object, action }: SubSettingsHeaderProps) {
    return <h1 className={styles['sub-settings-header']}>{action} {object}</h1>;
}