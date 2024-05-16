import styles from '@/styles/app/transactions/page.module.scss';
import { TransactionHeader } from '@/app/transactions/transaction-header';
import { TransactionList } from '@/app/transactions/transaction-list';

export function TransactionContainer() {
    return (
        <div className={styles['transaction-container']}>
            <TransactionHeader />
            <TransactionList />
        </div>
    );
}