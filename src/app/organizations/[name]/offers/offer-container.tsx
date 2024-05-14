'use client';

import { useOffers } from '@/hooks/use-offers';
import styles from '@/styles/app/categories/[name]/page.module.scss';
import { Offer } from '@/app/organizations/[name]/offers/offer';

interface OfferContainerProps {
    organizationName: string;
}

export function OfferContainer({ organizationName }: OfferContainerProps) {
    const { offers, isLoading } = useOffers(organizationName);

    return (
        <div className={styles['offer-container']}>
            {
                isLoading
                    ? 'Loading offers...'
                    : offers.map(offer => <Offer offer={offer} key={offer.name} />)
            }
        </div>
    );
}