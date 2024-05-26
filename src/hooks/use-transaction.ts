'use client';

import { useEffect, useState } from 'react';
import { TransactionModel } from '@/types/transaction-types';
import { Transactions } from '@/api/api';
import { toastError } from '@/utils/toast-utils';

export function useTransaction(transactionId: number) {
    const [transaction, setTransaction] = useState<TransactionModel | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const { getTransactionsEnd } = Transactions;

        getTransactionsEnd()
            .then(data => {
                const transaction = data.find(transaction => transaction.id === transactionId);

                if (transaction) {
                    setTransaction(transaction);
                }
            })
            .catch(err => toastError(`Unable to fetch transaction with ${transactionId} id: ${err.message}`))
            .finally(() => setIsLoading(false));
    }, []);

    return { transaction, isLoading };
}