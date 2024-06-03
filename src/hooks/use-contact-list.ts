'use client';

import { useEffect, useState } from 'react';
import { Contact } from '@/api/api';
import { ContactInfoModel } from '@/types/contact-types';
import { toastError } from '@/utils/toast-utils';

export function useContactList() {
    const [contacts, setContacts] = useState<ContactInfoModel[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(() => {
        const { getContactsEnd } = Contact;

        getContactsEnd()
            .then(data => setContacts(data))
            .catch(err => toastError(err.message))
            .finally(() => setIsFetching(false));
    }, []);

    return { isFetching, contacts };
}