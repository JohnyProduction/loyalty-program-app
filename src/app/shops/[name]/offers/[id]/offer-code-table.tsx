import { CodeModel } from '@/types/offer-types';
import styles from '@/styles/app/shops/[name]/offers/offer-code-table.module.scss';

interface OfferCodeTableProps {
    codes: CodeModel[];
}

export function OfferCodeTable({ codes }: OfferCodeTableProps) {
    const proceedDate = (code: CodeModel) => {
        return new Date(code.expiry)
            .toISOString()
            .substring(0, 16)
            .split('T')
            .join(' ');
    };

    const isExpired = (code: CodeModel): boolean => {
        return new Date().getTime() > new Date(code.expiry).getTime();
    };

    return (
        <table className={styles['table']}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Expiration</th>
                    <th>Was used?</th>
                </tr>
            </thead>
            <tbody>
                {codes.map(code =>
                    <tr key={code.code} data-availability={!code.isUsed} data-is-expired={isExpired(code)}>
                        <td className={styles['code']}>{code.code}</td>
                        <td className={styles['expiration']}>{proceedDate(code)}</td>
                        <td className={styles['availability']}>{code.isUsed && 'Yes'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}