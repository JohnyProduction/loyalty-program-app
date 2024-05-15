'use client';

import { useState } from 'react';
import { Offers } from '@/app/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useCreateOffer(organizationName: string) {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0.0);
    const [image, setImage] = useState<File | null>( null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onNameChange = (e: any) => setName(e.target.value);

    const onPriceChange = (e: any) => setPrice(e.target.value);

    const onImageChange = (e: any) => setImage(e.target.files[0]);

    const onSubmit = async () => {
        const { addOfferEnd, setOfferImageEnd } = Offers;
        setIsLoading(true);

        try {
            const newOfferId = await addOfferEnd({
                isActive: true,
                name,
                price,
                organization: organizationName,
                hasImage: Boolean(image)
            });

            if (image) {
                const formData = new FormData();
                formData.set('file', image);

                await setOfferImageEnd(newOfferId, formData);
            }

            setName('');
            setPrice(0);
            setImage(null);
            toastSuccess('New offer has been added!');
        } catch (err: any) {
            toastError(`Error occurred while adding a new offer: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        name, onNameChange,
        price, onPriceChange,
        image, onImageChange,
        onSubmit, isLoading
    };
}