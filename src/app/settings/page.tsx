import styles from '@/styles/app/settings/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { SettingsContainer } from '@/app/settings/settings-container';

export default function SettingsPage() {
    return (
        <main className={styles['settings-page']}>
            <TopBar />
            <PageBox>
                <SettingsContainer />
                <Footer />
            </PageBox>
        </main>
    );
}