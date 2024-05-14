'use client';

import { useShops } from '@/hooks/use-shops';
import styles from '@/styles/app/categories/[name]/page.module.scss';
import { Shop } from '@/app/categories/[name]/shop';

interface ShopContainerProps {
    categoryName: string;
}

export function ShopContainer({ categoryName }: ShopContainerProps) {
    const { isLoading, shops } = useShops(categoryName);

    return (
        <div className={styles['shop-container']}>
            {
                isLoading
                    ? 'Loading shops...'
                    : shops.map(shop => <Shop shop={shop} key={shop.name} />)
            }
        </div>
    );
}