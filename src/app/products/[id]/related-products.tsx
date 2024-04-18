import styles from '@/styles/app/products/[id]/page.module.scss';
import { OtherProductType } from '@/types/main-page-types';
import { OtherProducts } from '@/components/common/other-products';

interface RelatedProductsProps {
    productId: string;
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
    const products: OtherProductType[] = [
        {
            name: 'Masaż fizjoterapeutyczny',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny 2',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny 3',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        }
    ];

    return (
        <div className={styles['related-product-container']}>
            <h2>Related products</h2>
            <OtherProducts products={products} />
        </div>
    );
}