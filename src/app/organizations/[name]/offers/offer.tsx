'use client';

import { OfferModel } from '@/types/offer-types';
import styles from '@/styles/app/organizations/[name]/offers/page.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Offers } from '@/app/api/api';
import { FileModel } from '@/types/attachment-types';

interface OfferProps {
    offer: OfferModel;
}

export function Offer({ offer }: OfferProps) {
    const [image, setImage] = useState<FileModel | null>(null);

    useEffect(() => {
        const { getOfferImageEnd } = Offers;

        getOfferImageEnd(offer.id as number)
            .then(data => setImage(data))
            .catch(() => {});
    }, []);

    const style = {
        backgroundImage: `url(${image ? URL.createObjectURL(image.blob) : ''})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <Link href={`/organizations/${offer.organization}/offers/${offer.id}`}>
            <div className={styles['offer-element']}>
                <div className={styles['offer-element__image']} style={style}></div>
                <div className={styles['offer-element__name']}>{offer.name}</div>
            </div>
        </Link>
    );
}