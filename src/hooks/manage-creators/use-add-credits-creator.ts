'use client';

import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { OptionType } from '@/components/common/inputs/input-select';

export function useAddCreditsCreator() {
    const [login, setLogin] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const [usernames, setUsernames] = useState<OptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        User.getUsersEnd()
            .then(data => {
                const map = data.map((user, idx) => {
                    return {
                        id: idx,
                        label: user.login,
                        value: user.login
                    };
                });
                setUsernames(map);
            })
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    const onChangeLogin = (e: any) => {
        setLogin(e.target.value);
    };

    const onChangeAmount = (e: any) => {
        setAmount(e.target.value);
    };

    return {
        usernames, isLoading,
        login, onChangeLogin,
        amount, onChangeAmount
    };
}