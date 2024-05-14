import { ShopModel } from '@/types/offer-types';
import styles from '@/styles/app/categories/[name]/page.module.scss';
import Link from 'next/link';

interface ShopsProps {
    shop: ShopModel;
}

export function Shop({ shop }: ShopsProps) {
    return (
        <Link href={`/organizations/${shop.name}/offers`}>
            <div className={styles['shop-element']}>
                {shop.name}
            </div>
        </Link>
    );
}