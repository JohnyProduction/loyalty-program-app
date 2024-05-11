import { ProductType } from '@/types/main-page-types';
import styles from '@/styles/components/browse-product.module.scss';

export interface BrowseProductProps {
    product: ProductType;
}

export function BrowseProduct({ product }: BrowseProductProps) {
    return (
        <div className={styles['browse-product']}>
            <div className={styles['browse-product__image-container']}>
                <div className={styles['browse-product__image']}>
                    <img src={product.imageUrl} alt={`${product.name}'s category image`} />
                </div>
            </div>
            <div className={styles['browse-product__name']}>{product.name}</div>
        </div>
    );
}