'use client';

import { useOffers } from '@/hooks/use-offers';
import styles from '@/styles/app/organizations/[name]/offers/page.module.scss';
import { Offer } from '@/app/organizations/[name]/offers/offer';
import { Loader } from '@/components/common/loader';

interface OfferContainerProps {
    organizationName: string;
}

export function OfferContainer({ organizationName }: OfferContainerProps) {
    const { offers, isLoading } = useOffers(organizationName);

    return (
        <>
            <h3 style={{ textAlign: 'center', margin: '2rem 0 0.5rem 0' }}>Offers</h3>
            <div className={styles['offer-container']} data-is-loading={isLoading}>
                {
                    isLoading
                        ? <Loader />
                        : offers.map(offer => <Offer offer={offer} key={offer.name} />)
                }
            </div>
        </>
    );
}