import styles from '@/styles/app/products/[id]/page.module.scss';

interface ProductDetailsProps {
    productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
    return (
        <div className={styles['product-container__product-details']}>
            {productId}
        </div>
    );
}