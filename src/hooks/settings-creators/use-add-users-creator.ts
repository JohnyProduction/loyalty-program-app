'use client';

import { useState } from 'react';
import { AccountTypes } from '@/types/login-types';

export function useAddUsersCreator() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');
    const [role, setRole] = useState<AccountTypes>(AccountTypes.WORKER);

    const onChangeUsername = (e: any) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const onChangeOrganization = (e: any) => {
        setOrganization(e.target.value);
    };

    const onChangeRole = (e: any) => {
        setRole(e.target.value);
    };

    return {
        username, onChangeUsername,
        password, onChangePassword,
        email, onChangeEmail,
        organization, onChangeOrganization,
        role, onChangeRole
    };
}