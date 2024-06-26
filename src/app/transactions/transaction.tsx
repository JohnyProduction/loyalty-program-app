import { TransactionModel } from '@/types/transaction-types';
import styles from '@/styles/app/transactions/page.module.scss';
import { OblongButton } from '@/components/common/buttons/oblong-button';

interface TransactionProps {
    transaction: TransactionModel;
}

export function Transaction({ transaction }: TransactionProps) {
    return (
        <tr className={styles['transaction-element']}>
            <td>{new Date(transaction.date).toLocaleString()}</td>
            <td>{new Date(transaction.code.expiry).toLocaleString()}</td>
            <td>{transaction.code.code}</td>
            <td>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <OblongButton label={'Show'} link={`/transactions/${transaction.id}`} size={'small'} />
                </div>
            </td>
        </tr>
    );
}