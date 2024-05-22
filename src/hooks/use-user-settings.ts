'use client';

import { useEffect, useState } from 'react';
import { UserDbModel } from '@/types/user-types';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useUserSettings() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<UserDbModel | null>(null);

    useEffect(() => {
        const { getCurrentUserEnd } = User;

        getCurrentUserEnd()
            .then(data => setUser(data))
            .catch(err => toastError(`Error occurred while fetching current user: ${err.message}.`));
    }, []);

    const onChangeEmail = (e: any) => setEmail(e.target.value);

    const onChangePassword = (e: any) => setPassword(e.target.value);

    const onSubmitEmail = async () => {
        if (!user) {
            return;
        }

        console.log(user);

        const { editUserMailEnd } = User;
        const newUser: UserDbModel = { ...user, email };

        try {
            await editUserMailEnd(newUser);

            toastSuccess('Email successfully changed.');
        } catch (err: any) {
            toastError(`Error occurred while changing user email: ${err.message}.`);
        }
    };

    const onSubmitPassword = async () => {
        const { setPasswordEnd } = User;

        try {
            await setPasswordEnd(password);

            toastSuccess('Password successfully changed.');
        } catch (err: any) {
            toastError(`Error occurred while changing user password: ${err.message}.`);
        }
    };

    return {
        email, onChangeEmail, onSubmitEmail,
        password, onChangePassword, onSubmitPassword
    };
}