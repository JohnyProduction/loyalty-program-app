import styles from '@/styles/app/page.module.scss';
import { BrowseProduct } from '@/app/browse-product';
import { OtherProductType, ProductType } from '@/types/main-page-types';
import { BreakLine } from '@/components/common/break-line';
import { Product } from '@/app/product';

export function BrowseProducts() {
    const products: ProductType[] = [
        { name: 'Sport', imageUrl: '' },
        { name: 'Life', imageUrl: '' },
        { name: 'Health', imageUrl: '' }
    ];

    const otherProducts: OtherProductType[] = [
        {
            name: 'Masaż fizjoterapeutyczny',
            imageUrl: '',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny',
            imageUrl: '',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny',
            imageUrl: '',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        }
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
            <div className={styles['other-products']}>
                <div className={styles['other-products__container']}>
                    {otherProducts.map(product => <Product product={product} key={product.name} />)}
                </div>
                <div className={styles['other-products__pagination-container']}>X</div>
            </div>
            <></>
        </div>
    );
}