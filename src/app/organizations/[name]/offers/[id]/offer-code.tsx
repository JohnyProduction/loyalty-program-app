'use client';

import { CodeModel } from '@/types/offer-types';
import styles from '@/styles/app/organizations/[name]/offers/page.module.scss';

interface OfferCodeProps {
    code: CodeModel;
}

export function OfferCode({ code }: OfferCodeProps) {
    return (
        <div className={styles['code-element']}>
            <div className={styles['code-element__code']}>{code.code}</div>
            <div className={styles['code-element__details']}>
                <p>Expiration: {code.expiry.toISOString()}</p>
                <p>Is used: {code.isUsed}</p>
            </div>
        </div>
    );
}