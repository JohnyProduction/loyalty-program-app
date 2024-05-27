import styles from '@/styles/app/categories/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { CategoriesContainer } from '@/app/categories/categories-container';

export default function CategoriesPage() {
    return (
        <main className={styles['categories-page']}>
            <TopBar />
            <PageBox>
                <CategoriesContainer />
                <Footer />
            </PageBox>
        </main>
    );
}