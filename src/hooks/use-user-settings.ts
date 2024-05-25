'use client';

import { useEffect, useState } from 'react';
import { UserDbModel } from '@/types/user-types';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useUserSettings() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<UserDbModel | null>(null);
    const [isProceedingEmail, setIsProceedingEmail] = useState<boolean>(false);
    const [isProceedingPassword, setIsProceedingPassword] = useState<boolean>(false);

    useEffect(() => {
        const { getCurrentUserEnd } = User;

        getCurrentUserEnd()
            .then(data => setUser(data))
            .catch(err => toastError(`Error occurred while fetching current user: ${err.message}.`));
    }, []);

    const onChangeEmail = (e: any) => setEmail(e.target.value);

    const onChangePassword = (e: any) => setPassword(e.target.value);

    const onSubmitEmail = () => {
        if (!user) {
            return;
        }

        const { editUserMailEnd } = User;
        const newUser: UserDbModel = { ...user, email };

        setIsProceedingEmail(true);
        editUserMailEnd(newUser)
            .then(() => toastSuccess('Email successfully changed.'))
            .catch(err => toastError(`Error occurred while changing user email: ${err.message}.`))
            .finally(() => {
                setIsProceedingEmail(false);
                setEmail('');
            });
    };

    const onSubmitPassword = async () => {
        const { setPasswordEnd } = User;

        setIsProceedingPassword(true);
        setPasswordEnd(password)
            .then(() => toastSuccess('Password successfully changed.'))
            .catch(err => toastError(`Error occurred while changing user password: ${err.message}.`))
            .finally(() => {
                setIsProceedingPassword(false);
                setPassword('');
            });
    };

    return {
        email, onChangeEmail, onSubmitEmail, isProceedingEmail,
        password, onChangePassword, onSubmitPassword, isProceedingPassword
    };
}