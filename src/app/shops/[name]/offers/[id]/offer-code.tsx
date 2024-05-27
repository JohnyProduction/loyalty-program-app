'use client';

import { CodeModel } from '@/types/offer-types';
import styles from '@/styles/app/shops/[name]/offers/page.module.scss';

interface OfferCodeProps {
    code: CodeModel;
}

export function OfferCode({ code }: OfferCodeProps) {
    const proceedDate = (code: CodeModel) => {
        return code.expiry
            .substring(0, 16)
            .split('T')
            .join(' ');
    };

    return (
        <div className={styles['code-element']}>
            <div className={styles['code-element__code']}>Code: {code.code}</div>
            <div className={styles['code-element__details']}>
                <p>Expiration: {proceedDate(code)}</p>
                <p>Is used: {code.isUsed ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
}