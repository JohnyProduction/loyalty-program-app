'use client';

import styles from '@/styles/app/transactions/[id]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { useTransaction } from '@/hooks/use-transaction';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface TransactionsIdPageProps {
    params: Record<any, any>;
}

export default function TransactionsIdPage({ params }: TransactionsIdPageProps) {
    const { id } = params;
    const router = useRouter();
    const { transaction, isLoading } = useTransaction(Number(id));

    useEffect(() => {
        if (!isLoading && !transaction) {
            router.push('/transactions');
            router.refresh();
        }
    }, [isLoading]);

    return (
        <main className={styles['transactions-id-page']}>
            <TopBar />
            <PageBox>
                {!isLoading && (
                    <div className={styles['transaction-id-container']}>
                        <h3>{transaction?.offer.name}</h3>
                        <div>
                            <div>Transaction id: {transaction?.id}</div>
                            <div>Name: {transaction?.offer.name}</div>
                            <div>Code: {transaction?.code.code}</div>
                            <div>Expiration: {new Date(transaction?.code.expiry ?? Date.now()).toLocaleString()}</div>
                            <div>Price: {
                                (() => {
                                    const price = transaction?.offer.price || 0;
                                    const discount = transaction?.offer.shopDiscount;
                                    if (discount) {
                                        const discountAmount = discount.amount || 0;
                                        if (discount.type === 'Percent') {
                                            return (price - (price * discountAmount / 100)).toFixed(2);
                                        } else if (discount.type === 'Absolute') {
                                            return (price - discountAmount).toFixed(2);
                                        }
                                    }

                                    return price.toFixed(2);
                                })()
                            }</div>
                            <div>Discount:
                                {transaction?.offer.shopDiscount?.amount}
                                {
                                    (() => {
                                        if ( transaction?.offer.shopDiscount?.type === 'Percent') {
                                            return '%';
                                        } else {
                                            return 'PKT';
                                        }
                                    })()
                                }
                            </div>
                            <div>Category: {transaction?.offer.category}</div>
                            <div>Shop: {transaction?.offer.organization}</div>
                        </div>
                    </div>
                )}
                <Footer />
            </PageBox>
        </main>
    );
}