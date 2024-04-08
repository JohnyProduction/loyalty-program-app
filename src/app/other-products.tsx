import { OtherProductType } from '@/types/main-page-types';
import { Product } from '@/app/product';
import styles from '@/styles/app/page.module.scss';

interface OtherProductsProps {
    products: OtherProductType[];
}

export function OtherProducts({ products }: OtherProductsProps) {
    return (
        <div className={styles['other-products__container']}>
            {products.map(product => <Product product={product} key={product.name} />)}
            {products.length < 3 && (
                new Array(3 - products.length).fill(null).map((el, idx) => <div key={idx}></div>)
            )}
        </div>
    );
}