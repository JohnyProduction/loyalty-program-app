import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';

interface SettingsPageProps {
    params: Record<string, any>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    console.log(user, object, action);

    return (
        <main className={styles['settings-page']}>
            <TopBar />
            <div className={styles['content-box']}>
                <div className={styles['link-container']}></div>
                <div className={styles['creator-container']}></div>
            </div>
            <Footer />
        </main>
    );
}