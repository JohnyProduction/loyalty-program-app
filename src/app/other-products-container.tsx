'use client';

import { BreakLine } from '@/components/common/break-line';
import styles from '@/styles/app/page.module.scss';
import { OtherProducts } from '@/components/common/other-products';
import { ProductPagination } from '@/app/product-pagination';
import { OtherProductType } from '@/types/main-page-types';
import { useState } from 'react';

export function OtherProductsContainer() {
    const [page, setPage] = useState<number>(1);
    const productsPerPage = 3;

    const filterProducts = (otherProducts: OtherProductType[]): OtherProductType[] => {
        return otherProducts.filter((product, index) => {
            const startIndex = (page - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;

            return index >= startIndex && index < endIndex;
        });
    };

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
        <>
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
        </>
    );
}