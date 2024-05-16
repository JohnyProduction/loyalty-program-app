'use client';

import styles from '@/styles/app/transactions/page.module.scss';
import { useTransactions } from '@/hooks/use-transactions';
import { Loader } from '@/components/common/loader';
import { Transaction } from '@/app/transactions/transaction';

export function TransactionList() {
    const { transactions, isLoading } = useTransactions();

    return (
        <div className={styles['transaction-container__list']}>
            {isLoading
                ? <Loader />
                : <>
                    <div className={styles['transaction-container__list-container']}>
                        {transactions.map(transaction => <Transaction transaction={transaction} />)}
                    </div>
                    <div className={styles['transaction-container__list-summary']}>
                        Found {transactions.length} transaction{transactions.length > 1 ? 's' : ''}
                    </div>
                </>
            }
        </div>
    );
}