'use client';

import { useState } from 'react';
import { Contact } from '@/api/api';
import { ContactInfoModel } from '@/types/contact-types';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useAddContact() {
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const onAddContact = async () => {
        const { addContactEnd } = Contact;
        const contact: ContactInfoModel = { name, phone, email, position };

        setIsProceeding(true);

        try {
            const res = await addContactEnd(contact);

            toastSuccess(res);
            resetForm();
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsProceeding(false);
        }
    };

    const onChangeName = (e: any) => setName(e.target.value);

    const onChangePhone = (e: any) => setPhone(e.target.value);

    const onChangeEmail = (e: any) => setEmail(e.target.value);

    const onChangePosition = (e: any) => setPosition(e.target.value);

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setPosition('');
    };

    return {
        isProceeding, resetForm, onAddContact,
        name, onChangeName,
        phone, onChangePhone,
        email, onChangeEmail,
        position, onChangePosition
    };
}