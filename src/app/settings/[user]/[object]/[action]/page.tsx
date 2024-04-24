import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';

interface SettingsPageProps {
    params: Record<string, any>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    console.log(user, object, action);

    return (
        <main className={styles['settings-page']}>
            <>Settings</>
        </main>
    );
}