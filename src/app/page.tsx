import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { WelcomeFragment } from '@/app/welcome-fragment';
import { BrowseProducts } from '@/app/browse-products';
import styles from '@/styles/app/page.module.scss';

export default function MainPage() {
    return (
        <main className={styles['main-page']}>
            <div>
                <TopBar />
                <WelcomeFragment />
            </div>
            <BrowseProducts />
            <Footer />
        </main>
    );
}
