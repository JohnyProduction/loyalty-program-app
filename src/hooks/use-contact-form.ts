'use client';

import { useState } from 'react';

export function useContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onFullNameChange = (event: any) => {
        setFullName(event.target.value);
    };

    const onEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const onMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    const resetForm = () => {
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return {
        fullName,
        email,
        message,
        onFullNameChange,
        onEmailChange,
        onMessageChange,
        resetForm
    };
}