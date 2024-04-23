'use client';

import { useState } from 'react';

export function useAddUser() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ role, setRole ] = useState('');

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handleRoleChange = (event: any) => {
        setRole(event.target.value);
    };

    return {
        username,
        password,
        email,
        role,
        handleUsernameChange,
        handlePasswordChange,
        handleEmailChange,
        handleRoleChange
    };
}