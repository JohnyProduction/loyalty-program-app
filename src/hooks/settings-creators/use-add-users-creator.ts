'use client';

import { useState } from 'react';

export function useAddUsersCreator() {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [role, setRole] = useState<string>('');

    const onChangeFullName = (e: any) => {
        setFullName(e.target.value);
    };

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const onChangeRole = (e: any) => {
        setRole(e.target.value);
    };

    return {
        fullName, onChangeFullName,
        email, onChangeEmail,
        role, onChangeRole
    };
}