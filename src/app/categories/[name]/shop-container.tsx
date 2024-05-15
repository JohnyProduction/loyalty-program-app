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
        <div className={styles['shop-container']} data-is-loading={isLoading}>
            {
                isLoading
                    ? <Loader />
                    : shops.map(shop => <Shop shop={shop} key={shop.name} />)
            }
        </div>
    );
}