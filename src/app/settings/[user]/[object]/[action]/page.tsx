import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { LinkContainer } from '@/app/settings/[user]/[object]/[action]/link-container';
import { CreatorContainer } from '@/app/settings/[user]/[object]/[action]/creator-container';

interface SettingsPageProps {
    params: Record<string, any>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    return (
        <main className={styles['settings-page']}>
            <TopBar />
            <div className={styles['content-box']}>
                <LinkContainer />
                <CreatorContainer />
            </div>
            <Footer />
        </main>
    );
}