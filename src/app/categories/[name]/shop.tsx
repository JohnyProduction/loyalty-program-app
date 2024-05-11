import { ShopModel } from '@/types/offer-types';

interface ShopsProps {
    shop: ShopModel;
}

export function Shop({ shop }: ShopsProps) {
    return (<>{shop.name}</>);
}