'use client';

import { useEffect, useState } from 'react';
import { Transactions } from '@/api/api';
import { toastError } from '@/utils/toast-utils';

export function useCodes(offerId: number) {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [codes, setCodes] = useState<number>(0);

    const refetch = () => {
        const { checkAvailableCodesEnd } = Transactions;

        setIsFetching(true);
        checkAvailableCodesEnd(offerId)
            .then(codes => setCodes(codes))
            .catch(err => toastError(err.message))
            .finally(() => setIsFetching(false));
    };

    useEffect(() => {
        refetch();
    }, []);

    return { isFetching, codes, refetch };
}