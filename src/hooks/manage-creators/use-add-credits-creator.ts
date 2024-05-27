'use client';

import { useEffect, useState } from 'react';
import { User } from '@/api/api';
import { OptionType } from '@/components/common/inputs/input-select';
import { useOrganizations } from '@/hooks/use-organizations';
import { UserDbModel } from '@/types/user-types';
import { AccountType } from '@/types/login-types';

export function useAddCreditsCreator(profile?: UserDbModel) {
    const { organizations } = useOrganizations();
    const [organization, setOrganization] = useState<string>();
    const [login, setLogin] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [currentAmount, setCurrentAmount] = useState<number>(0);

    const [usernames, setUsernames] = useState<OptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!profile) {
            return;
        }

        User.getUsersEnd(organization ?? undefined)
            .then(data => {
                if (profile.type === AccountType.MANAGER) {
                    data = data.filter(user => user.type !== AccountType.ADMINISTRATOR);
                }

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
    }, [organization, profile]);

    const resetForm = () => {
        setLogin(usernames[0].label);
        setAmount(0);
        setCurrentAmount(currentAmount + amount);
    };

    const onChangeOrganization = (e: any) => {
        setOrganization(e.target.value);
    };

    const onChangeLogin = (e: any) => {
        setLogin(e.target.value);
    };

    const onChangeAmount = (e: any) => {
        setAmount(Number(e.target.value));
    };

    return {
        usernames, isLoading,
        organization, organizations, onChangeOrganization,
        login, onChangeLogin,
        amount, onChangeAmount,
        resetForm, currentAmount
    };
}