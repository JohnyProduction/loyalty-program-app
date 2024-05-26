'use client';

import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { OptionType } from '@/components/common/inputs/input-select';
import { useOrganizations } from '@/hooks/use-organizations';

export function useAddCreditsCreator() {
    const { organizations } = useOrganizations();
    const [organization, setOrganization] = useState<string>();
    const [login, setLogin] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [currentAmount, setCurrentAmount] = useState<number>(0);

    const [usernames, setUsernames] = useState<OptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        User.getUsersEnd(organization)
            .then(data => {
                const map = data.map((user, idx) => {
                    return {
                        id: idx,
                        label: user.login,
                        value: user.login
                    };
                });
                setUsernames(map);
                setLogin(data[0].login);
                setCurrentAmount(data[0].credits);
            })
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, [organization]);

    const resetForm = () => {
        setLogin(usernames[0].label);
        setAmount('');
    };

    const onChangeOrganization = (e: any) => {
        setOrganization(e.target.value);
    };

    const onChangeLogin = (e: any) => {
        setLogin(e.target.value);
    };

    const onChangeAmount = (e: any) => {
        setAmount(e.target.value);
    };

    return {
        usernames, isLoading,
        organization, organizations, onChangeOrganization,
        login, onChangeLogin,
        amount, onChangeAmount,
        resetForm, currentAmount
    };
}