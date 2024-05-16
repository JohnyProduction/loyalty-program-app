'use client';

import { useEffect, useState } from 'react';
import { Transactions } from '@/api/api';
import { toastError } from '@/utils/toast-utils';
import { TransactionModel } from '@/types/transaction-types';

export function useTransactions() {
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const { getTransactionsEnd } = Transactions;

        getTransactionsEnd()
            .then(data => setTransactions(data))
            .catch((err) => toastError(`Unable to fetch user transactions: ${err.message}.`))
            .finally(() => setIsLoading(false));
    }, []);

    return { transactions, isLoading };
}