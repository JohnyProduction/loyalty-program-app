import styles from '@/styles/app/page.module.scss';
import { BrowseProduct } from '@/app/browse-product';
import { ProductType } from '@/types/main-page-types';
import { BreakLine } from '@/components/common/break-line';

export function BrowseProducts() {
    const products: ProductType[] = [
        { name: 'Sport', imageUrl: '' },
        { name: 'Life', imageUrl: '' },
        { name: 'Health', imageUrl: '' }
    ];

    return (
        <div className={styles['browse-products']}>
            <h2 className={styles['browse-products__header']}>Browse products</h2>
            <div>
                <div className={styles['browse-products__container']}>
                    {products.map(product => <BrowseProduct product={product} key={product.name} />)}
                </div>
            </div>
            <BreakLine />
        </div>
    );
}