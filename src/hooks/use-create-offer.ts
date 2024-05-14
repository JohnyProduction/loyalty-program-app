'use client';

import { useState } from 'react';
import { Offer } from '@/app/api/api';
import { toastError } from '@/utils/toast-utils';

export function useCreateOffer(organizationName: string) {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0.0);

    const onNameChange = (e: any) => setName(e.target.value);

    const onPriceChange = (e: any) => setPrice(e.target.value);

    const onSubmit = async () => {
        const { addOfferEnd } = Offer;

        try {
            await addOfferEnd({
                isActive: true,
                name,
                price,
                organization: organizationName
            });
        } catch (err: any) {
            toastError(`Error occurred while adding a new offer: ${err.message}`);
        }
    };

    return {
        name, onNameChange,
        price, onPriceChange,
        onSubmit
    };
}