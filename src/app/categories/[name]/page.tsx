import { PageBox } from '@/app/page-box';
import styles from '@/styles/app/categories/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { ShopContainer } from '@/app/categories/[name]/shop-container';

interface CategoriesNamePageProps {
    params: Record<string, any>;
}

export default function CategoriesNamePage({ params }: CategoriesNamePageProps) {
    const { name } = params;

    return (
        <main className={styles['categories-name-page']}>
            <TopBar />
            <PageBox>
                <ShopContainer categoryName={name} />
                <Footer />
            </PageBox>
        </main>
    );
}