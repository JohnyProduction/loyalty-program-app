'use client';

import styles from '@/styles/app/organizations/[name]/offers/[id]/page.module.scss';
import { useOfferCodes } from '@/hooks/use-offer-codes';
import { OfferCode } from '@/app/organizations/[name]/offers/[id]/offer-code';

interface OfferCodeContainerProps {
    id: number;
}

export function OfferCodeContainer({ id }: OfferCodeContainerProps) {
    const { codes, isLoading } = useOfferCodes(id);

    return (
        <>
            <h3 style={{ textAlign: 'center', margin: '2rem 0 0.5rem 0' }}>Codes</h3>
            <div className={styles['offer-container']}>
                {
                    isLoading
                        ? 'Loading offer codes...'
                        : codes.map(code => <OfferCode code={code} key={code.code} />)
                }
            </div>
        </>
    );
}