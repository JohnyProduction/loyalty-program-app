'use client';

import { useShops } from '@/hooks/use-shops';
import styles from '@/styles/app/categories/page.module.scss';
import { Loader } from '@/components/common/loader';
import { Shop } from '@/app/categories/[name]/shop';

export function ShopContainer() {
    const { isLoading, shops } = useShops();

    return (
        <div className={styles['shop-container']}>
            {isLoading
                ? <Loader isAbsolute={true} />
                : <div className={styles['shop-container__elements']}>
                    {shops.map(shop => <Shop shop={shop} key={shop.name} />)}
                </div>
            }
        </div>
    );
}