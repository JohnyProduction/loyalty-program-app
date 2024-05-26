'use client';

import { useEffect, useState } from 'react';
import { Offers } from '@/api/api';
import { ShopOfferModel } from '@/types/offer-types';
import { toastError } from '@/utils/toast-utils';

export function useOffers(organizationName: string) {
    const [offers, setOffers] = useState<ShopOfferModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const { getOffersEnd } = Offers;

        getOffersEnd(organizationName)
            .then(data => setOffers(data))
            .catch(err => toastError(`Error occurred while fetching offers: ${err.message}`))
            .finally(() => setIsLoading(false));
    }, []);

    return { offers, isLoading };
}