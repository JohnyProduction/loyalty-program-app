'use client';

import { useEffect, useState } from 'react';
import { Offer } from '@/app/api/api';
import { ShopModel } from '@/types/offer-types';
import { toastError } from '@/utils/toast-utils';

export function useShops(categoryName: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [shops, setShops] = useState<ShopModel[]>([]);

    useEffect(() => {
        const { getShopsEnd } = Offer;

        getShopsEnd(categoryName)
            .then(data => setShops(data))
            .catch(err => toastError(`Error while fetching shops: ${err.message}.`))
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, shops };
}