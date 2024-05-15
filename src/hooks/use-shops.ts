'use client';

import { useEffect, useState } from 'react';
import { Offers } from '@/app/api/api';
import { ShopModel } from '@/types/offer-types';

export function useShops(categoryName: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [shops, setShops] = useState<ShopModel[]>([]);

    useEffect(() => {
        const { getShopsEnd } = Offers;

        getShopsEnd(categoryName)
            .then(data => setShops(data))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, shops };
}