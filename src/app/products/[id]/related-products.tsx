import styles from '@/styles/app/products/[id]/page.module.scss';

interface RelatedProductsProps {
    productId: string;
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
    return (
        <div className={styles['related-product-container']}>
            {productId}
        </div>
    );
}