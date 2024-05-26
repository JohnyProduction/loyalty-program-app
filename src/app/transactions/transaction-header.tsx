'use client';

import styles from '@/styles/app/transactions/page.module.scss';
import { getProfile } from '@/utils/user-utils';
import { useEffect, useState } from 'react';

export function TransactionHeader() {
    const [isClient, setIsClient] = useState<boolean>(false);

    // To avoid render error by client and server side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <h3 className={styles['transaction-container__header']}>
            {isClient
                ? `${getProfile()?.login}'s transactions`
                : 'Transactions'
            }
        </h3>
    );
}