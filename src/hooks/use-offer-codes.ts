'use client';

import { useEffect, useState } from 'react';
import { Offers } from '@/app/api/api';
import { CodeModel } from '@/types/offer-types';

export function useOfferCodes(offerId: number) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [codes, setCodes] = useState<CodeModel[]>([]);

    useEffect(() => {
        const { checkOfferCodesEnd } = Offers;

        checkOfferCodesEnd(offerId)
            .then(data => setCodes(data))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, codes };
}