'use client';

import styles from '@/styles/app/organizations/[name]/offers/[id]/page.module.scss';
import { useOfferCodes } from '@/hooks/use-offer-codes';
import { OfferCode } from '@/app/organizations/[name]/offers/[id]/offer-code';
import { Loader } from '@/components/common/loader';

interface OfferCodeContainerProps {
    offerId: number;
}

export function OfferCodeContainer({ offerId }: OfferCodeContainerProps) {
    const { codes, isLoading } = useOfferCodes(offerId);

    return (
        <>
            <h3>Codes</h3>
            <div className={styles['offer-container']}>
                {
                    isLoading
                        ? <Loader />
                        : codes.map(code => <OfferCode code={code} key={code.code} />)
                }
            </div>
        </>
    );
}