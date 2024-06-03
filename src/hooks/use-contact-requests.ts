'use client';

import { useEffect, useState } from 'react';
import { Contact } from '@/api/api';
import { ContactRequestModel } from '@/types/contact-types';
import { toastError } from '@/utils/toast-utils';

export function useGetContactRequests() {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [requests, setRequests] = useState<ContactRequestModel[]>([]);

    useEffect(() => {
        refetch();
    }, []);

    const refetch = () => {
        const { getAllContactRequestsEnd } = Contact;

        setIsFetching(true);

        getAllContactRequestsEnd()
            .then(data => setRequests(data))
            .catch(err => toastError(err.message))
            .finally(() => setIsFetching(false));
    };

    return { isFetching, requests, refetch };
}