'use client';

import styles from '@/styles/app/shops/[name]/offers/[id]/page.module.scss';
import { useOfferCodes } from '@/hooks/use-offer-codes';
import { OfferCode } from '@/app/shops/[name]/offers/[id]/offer-code';
import { Loader } from '@/components/common/loader';
import { useContext, useEffect } from 'react';
import { FormRefetchContext } from '@/contexts/form-refetch-context';

interface OfferCodeContainerProps {
    offerId: number;
}

export function OfferCodeContainer({ offerId }: OfferCodeContainerProps) {
    const { codes, isLoading, refetch } = useOfferCodes(offerId);
    const { forceRefetch } = useContext(FormRefetchContext);

    useEffect(() => {
        refetch();
    }, [forceRefetch]);

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