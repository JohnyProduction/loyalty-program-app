'use client';

import { useContactList } from '@/hooks/use-contact-list';
import { Loader } from '@/components/common/loader';

export function ContactList() {
    const { contacts, isFetching } = useContactList();

    return (
        <div>
            <h2>Contact list</h2>
            <ul>
                {isFetching
                    ? <Loader />
                    : contacts.map(contact => {
                        return (
                            <li key={contact.id}>
                                {contact.name}, {contact.position}, {contact.email}, {contact.phone}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}