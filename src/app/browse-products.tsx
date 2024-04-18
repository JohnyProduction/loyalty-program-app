'use client';

import styles from '@/styles/app/page.module.scss';
import { BrowseProduct } from '@/app/browse-product';
import { OtherProductType, ProductType } from '@/types/main-page-types';
import { BreakLine } from '@/components/common/break-line';
import { useState } from 'react';
import { ProductPagination } from '@/app/product-pagination';
import { OtherProducts } from '@/components/common/other-products';

export function BrowseProducts() {
    const [page, setPage] = useState<number>(1);
    const productsPerPage = 3;

    const filterProducts = (otherProducts: OtherProductType[]): OtherProductType[] => {
        return otherProducts.filter((product, index) => {
            const startIndex = (page - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;

            return index >= startIndex && index < endIndex;
        });
    };

    const products: ProductType[] = [
        { name: 'Sport', imageUrl: '/pages/main/sport-category.jpg' },
        { name: 'Life', imageUrl: '/pages/main/life-category.jpg' },
        { name: 'Health', imageUrl: '/pages/main/health-category.jpg' }
    ];

    const otherProducts: OtherProductType[] = [
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
        },
        {
            name: 'Masaż fizjoterapeutyczny 4',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny 5',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny 6',
            imageUrl: '/pages/main/massage.jpg',
            location: 'Kraków, w. Małopolskie',
            address: 'al. Pokoju 16',
            priceFrom: 49,
            currency: 'zł'
        },
        {
            name: 'Masaż fizjoterapeutyczny 7',
            imageUrl: '/pages/main/massage.jpg',
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
                <OtherProducts products={filterProducts(otherProducts)} />
                <ProductPagination
                    setPage={setPage}
                    page={page}
                    productCount={otherProducts.length}
                    productsPerPage={productsPerPage}
                />
            </div>
            <></>
        </div>
    );
}