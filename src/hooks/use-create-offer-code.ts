'use client';

import { Offers } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { useState } from 'react';
import { NewCodeModel } from '@/types/offer-types';

export function useCreateOfferCode(offerId: number) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [codeNumber, setCodeNumber] = useState<number>(0);
    const [expiry, setExpiry] = useState<Date>(new Date());

    const onSubmit = async () => {
        const { addCodesEnd } = Offers;
        const code: NewCodeModel = {
            code: codeNumber,
            expiry
        };

        setIsLoading(true);

        try {
            const res = await addCodesEnd(offerId, [code]);
            toastSuccess(res);
        } catch (err: any) {
            toastError(`Error occurred while adding a new code: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const onCodeNumberChange = (e: any) => setCodeNumber(e.target.value);

    const onExpiryChange = (e: any) => setExpiry(e.target.value);

    return {
        isLoading, onSubmit,
        codeNumber, onCodeNumberChange,
        expiry, onExpiryChange
    };
}