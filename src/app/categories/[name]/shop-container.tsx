'use client';

import { useShops } from '@/hooks/use-shops';
import styles from '@/styles/app/categories/[name]/page.module.scss';
import { Shop } from '@/app/categories/[name]/shop';
import { Loader } from '@/components/common/loader';

interface ShopContainerProps {
    categoryName: string;
}

export function ShopContainer({ categoryName }: ShopContainerProps) {
    const { isLoading, shops } = useShops(categoryName);

    return (
        <div className={styles['shop-container']}>
            {
                isLoading
                    ? <Loader />
                    : <>
                        <div className={styles['shop-container__elements']} data-is-loading={isLoading}>
                            {shops.map(shop => <Shop shop={shop} key={shop.name} />)}
                        </div>
                        <p style={{ textAlign: 'center' }}>Found {shops.length} shop{shops.length > 1 ? 's' : ''}.</p>
                    </>
            }
        </div>
    );
}