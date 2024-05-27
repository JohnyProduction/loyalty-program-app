import { ShopModel } from '@/types/offer-types';
import styles from '@/styles/app/categories/page.module.scss';
import Link from 'next/link';
import { useShopImage } from '@/hooks/use-shop-image';
import { Loader } from '@/components/common/loader';

interface ShopsProps {
    shop: ShopModel;
}

export function Shop({ shop }: ShopsProps) {
    const { isLoading, url } = useShopImage(shop);

    return (
        <Link href={`/organizations/${shop.name}/offers`}>
            <div className={styles['shop-element']}>
                <div className={styles['shop-element__image']}>
                    {isLoading
                        ? <Loader />
                        : <img src={url} alt={`${shop.name}'s shop image`} />
                    }
                </div>
                <p>{shop.name}</p>
            </div>
        </Link>
    );
}