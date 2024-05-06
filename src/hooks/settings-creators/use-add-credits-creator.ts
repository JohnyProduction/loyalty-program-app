'use client';

import { useState } from 'react';

export function useAddCreditsCreator() {
    const [login, setLogin] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const onChangeLogin = (e: any) => {
        setLogin(e.target.value);
    };

    const onChangeAmount = (e: any) => {
        setAmount(e.target.value);
    };

    return {
        login, onChangeLogin,
        amount, onChangeAmount
    };
}