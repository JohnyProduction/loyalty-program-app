import styles from '@/styles/app/categories/page.module.scss';
import { ProfileProvider } from '@/contexts/profile-context';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { ShopContainer } from '@/app/shops/shop-container';

export default function ShopsPage() {
    return (
        <main className={styles['shops-page']}>
            <ProfileProvider>
                <TopBar />
                <PageBox>
                    <ShopContainer />
                    <Footer />
                </PageBox>
            </ProfileProvider>
        </main>
    );
}