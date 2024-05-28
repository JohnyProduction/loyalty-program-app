'use client';

import { useEffect, useState } from 'react';
import { Offers } from '@/api/api';
import { CodeModel } from '@/types/offer-types';

export function useOfferCodes(offerId: number) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [codes, setCodes] = useState<CodeModel[]>([]);
    const [forceRefetch, setForceRefetch] = useState<boolean>(false);

    useEffect(() => {
        const { checkOfferCodesEnd } = Offers;

        setIsLoading(true);

        checkOfferCodesEnd(offerId)
            .then(data => setCodes(data))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, [forceRefetch]);

    const refetch = () => setForceRefetch(!forceRefetch);

    return { isLoading, codes, refetch };
}