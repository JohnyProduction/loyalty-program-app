import { TransactionModel } from '@/types/transaction-types';
import styles from '@/styles/app/transactions/page.module.scss';

interface TransactionProps {
    transaction: TransactionModel;
}

export function Transaction({ transaction }: TransactionProps) {
    return (
        <div className={styles['transaction-element']}>Transaction ID: {transaction.id}</div>
    );
}