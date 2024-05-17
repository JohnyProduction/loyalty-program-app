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
                    <table className={styles['transaction-container__list-container']}>
                        <thead>
                            <tr>
                                <th>Purchase date</th>
                                <th>Expiration date</th>
                                <th>Code</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(transaction => <Transaction transaction={transaction} />)}
                        </tbody>
                    </table>
                    <div className={styles['transaction-container__list-summary']}>
                        Found {transactions.length} transaction{transactions.length > 1 ? 's' : ''}
                    </div>
                </>
            }
        </div>
    );
}