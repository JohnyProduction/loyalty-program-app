'use client';

import { useEffect, useState } from 'react';
import { Offers } from '@/api/api';
import { ShopOfferModel } from '@/types/offer-types';
import { toastError } from '@/utils/toast-utils';
import { FileModel } from '@/types/attachment-types';

export function useGetOffer(organization: string, offerId: number) {
    const [offer, setOffer] = useState<ShopOfferModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [image, setImage] = useState<FileModel>();
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

    useEffect(() => {
        const { getOffersEnd } = Offers;

        getOffersEnd(organization)
            .then(offers => {
                const foundOffer = offers.find(offer => offer.id === offerId);

                if (!foundOffer) {
                    toastError(`Error: Offer with ${offerId} in ${organization} organization has not been found.`);

                    return;
                }

                setOffer(foundOffer);

                if (foundOffer.hasImage) {
                    const { getOfferImageEnd } = Offers;

                    if (!foundOffer.id) {
                        return;
                    }

                    setIsLoadingImage(true);
                    getOfferImageEnd(foundOffer.id)
                        .then(img => setImage(img))
                        .catch(() => {})
                        .finally(() => setIsLoadingImage(false));
                }
            })
            .catch(err => toastError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { offer, isLoading, isLoadingImage, image };
}