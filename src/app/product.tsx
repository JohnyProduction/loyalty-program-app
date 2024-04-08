import { OtherProductType } from '@/types/main-page-types';
import styles from '@/styles/components/product.module.scss';

interface ProductProps {
    product: OtherProductType;
}

export function Product({ product }: ProductProps) {
    return (
        <div className={styles['product']}>
            <div className={styles['product__image-container']}>
                <div className={styles['product__image']}>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            </div>
            <div className={styles['product__info-container']}>
                <div>
                    <div className={styles['product__info-name']}>{product.name}</div>
                    <div className={styles['product__info-location']}>{product.location}</div>
                    <div className={styles['product__info-address']}>{product.address}</div>
                </div>
                <div>
                    <span>od {product.priceFrom} {product.currency}</span>
                    <p className={styles['product__info-summary']}>Za całość zapłać punktami</p>
                </div>
            </div>
        </div>
    );
}