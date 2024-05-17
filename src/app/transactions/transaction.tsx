import { TransactionModel } from '@/types/transaction-types';
import styles from '@/styles/app/transactions/page.module.scss';
import { OblongButton } from '@/components/common/buttons/oblong-button';

interface TransactionProps {
    transaction: TransactionModel;
}

export function Transaction({ transaction }: TransactionProps) {
    return (
        <tr className={styles['transaction-element']}>
            <td>{transaction.date.toISOString()}</td>
            <td>{transaction.code.expiry.toISOString()}</td>
            <td>{transaction.code.code}</td>
            <td>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <OblongButton label={'Show'} link={`/transaction/${transaction.id}`} size={'small'} />
                </div>
            </td>
        </tr>
    );
}