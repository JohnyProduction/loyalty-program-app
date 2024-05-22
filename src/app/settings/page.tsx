import styles from '@/styles/app/manage/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';

export default function SettingsPage() {
    return (
        <main className={styles['settings-page']}>
            <TopBar />
            <PageBox>
                <div className={styles['settings-container']}></div>
                <Footer />
            </PageBox>
        </main>
    );
}