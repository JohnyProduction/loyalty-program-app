'use client';

import { useOffers } from '@/hooks/use-offers';
import styles from '@/styles/app/shops/[name]/offers/page.module.scss';
import { Offer } from '@/app/shops/[name]/offers/offer';
import { Loader } from '@/components/common/loader';

interface OfferContainerProps {
    organizationName: string;
}

export function OfferContainer({ organizationName }: OfferContainerProps) {
    const { offers, isLoading } = useOffers(organizationName);

    return (
        <>
            <h3 style={{ textAlign: 'center', margin: '2rem 0 0.5rem 0' }}>Offers</h3>
            <div className={styles['offer-container']}>
                {
                    isLoading
                        ? <Loader />
                        : <>
                            <div className={styles['offer-container__elements']} data-is-loading={isLoading}>{offers.map(offer => <Offer offer={offer} key={offer.name} />)}</div>
                            <p style={{ textAlign: 'center' }}>Found {offers.length} offer{offers.length > 1 ? 's' : ''}.</p>
                        </>
                }
            </div>
        </>
    );
}