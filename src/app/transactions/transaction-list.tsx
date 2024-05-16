'use client';

import styles from '@/styles/app/transactions/page.module.scss';
import { useTransactions } from '@/hooks/use-transactions';
import { Loader } from '@/components/common/loader';

export function TransactionList() {
    const { transactions, isLoading } = useTransactions();

    return (
        <div className={styles['transaction-container__list']}>
            {isLoading
                ? <Loader />
                : transactions.map(transaction => {
                    return <></>;
                })
            }
        </div>
    );
}