import styles from '@/styles/app/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { ProductDetails } from '@/app/products/[id]/product-details';
import { RelatedProducts } from '@/app/products/[id]/related-products';

interface ProductsIdPageProps {
    params: Record<string, any>;
}

export default function ProductsIdPage({ params }: ProductsIdPageProps) {
    const { id } = params;

    return (
        <main className={styles['products-id-page']}>
            <TopBar />
            <PageBox>
                <div className={styles['product-container']}>
                    <ProductDetails productId={id} />
                    <RelatedProducts productId={id} />
                </div>
                <Footer />
            </PageBox>
        </main>
    );
}