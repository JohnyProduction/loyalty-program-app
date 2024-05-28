'use client';

import { OfferModel } from '@/types/offer-types';
import styles from '@/styles/app/shops/[name]/offers/page.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Offers } from '@/api/api';
import { FileModel } from '@/types/attachment-types';
import { Loader } from '@/components/common/loader';

interface OfferProps {
    offer: OfferModel;
}

export function Offer({ offer }: OfferProps) {
    const [image, setImage] = useState<FileModel | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!offer.hasImage) {
            setIsLoading(false);

            return;
        }

        const { getOfferImageEnd } = Offers;

        getOfferImageEnd(offer.id as number)
            .then(data => setImage(data))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    const style = {
        backgroundImage: `url(${image ? URL.createObjectURL(image.blob) : '/pages/no-photo.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <Link href={`/shops/${offer.organization}/offers/${offer.id}`}>
            <div className={styles['offer-element']}>
                <div className={styles['offer-element__image']} style={isLoading ? loaderStyle : style}>
                    {isLoading && <Loader />}
                </div>
                <div className={styles['offer-element__name']}>{offer.name}</div>
            </div>
        </Link>
    );
}