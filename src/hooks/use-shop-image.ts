'use client';

import { Organization } from '@/app/api/api';
import { useEffect, useState } from 'react';
import { ShopModel } from '@/types/offer-types';

export function useShopImage(shop: ShopModel) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>('/pages/no-photo.png');

    useEffect(() => {
        if (!shop.hasImage) {
            setIsLoading(false);

            return;
        }

        const { getOrganizationImageEnd } = Organization;

        getOrganizationImageEnd(shop.name)
            .then(data => setUrl(URL.createObjectURL(data.blob)))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, url };
}