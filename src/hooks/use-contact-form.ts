'use client';

import { useState } from 'react';
import { Contact } from '@/api/api';
import { ContactRequestModel } from '@/types/contact-types';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useContactForm() {
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState<boolean>(false);

    // const onFullNameChange = (event: any) => {
    //     setFullName(event.target.value);
    // };
    //
    // const onEmailChange = (event: any) => {
    //     setEmail(event.target.value);
    // };

    const onSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    const onMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    const resetForm = () => {
        // setFullName('');
        // setEmail('');
        setSubject('');
        setMessage('');
    };

    const onSubmit = async () => {
        const { addContactRequestEnd } = Contact;
        const contactRequest: ContactRequestModel = {
            subject: 'x',
            body: message,
            contReqDate: new Date()
        };

        setIsSending(true);

        try {
            const res = await addContactRequestEnd(contactRequest);

            resetForm();
            toastSuccess(res);
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsSending(false);
        }
    };

    return {
        // fullName,
        // email,
        subject,
        message,
        // onFullNameChange,
        // onEmailChange,
        onSubjectChange,
        onMessageChange,
        onSubmit, resetForm, isSending
    };
}