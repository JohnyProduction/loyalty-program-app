'use client';

import styles from '@/styles/app/shops/[name]/offers/[id]/page.module.scss';
import { useOfferCodes } from '@/hooks/use-offer-codes';
import { Loader } from '@/components/common/loader';
import { useContext, useEffect } from 'react';
import { FormRefetchContext } from '@/contexts/form-refetch-context';
import { ProfileContext } from '@/contexts/profile-context';
import { AccountType } from '@/types/login-types';
import { OfferCodeTable } from '@/app/shops/[name]/offers/[id]/offer-code-table';

interface OfferCodeContainerProps {
    offerId: number;
}

export function OfferCodeContainer({ offerId }: OfferCodeContainerProps) {
    const { codes, isLoading, refetch } = useOfferCodes(offerId);
    const { forceRefetch } = useContext(FormRefetchContext);
    const { profile } = useContext(ProfileContext);

    useEffect(() => {
        refetch();
    }, [forceRefetch]);

    if (profile?.type === AccountType.MANAGER) {
        return <></>;
    }

    return (
        <>
            <h3>Codes</h3>
            <div className={styles['offer-container']}>
                {
                    isLoading
                        ? <Loader />
                        : <OfferCodeTable codes={codes} />
                }
            </div>
        </>
    );
}