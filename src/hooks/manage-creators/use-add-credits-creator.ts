'use client';

import { useContext, useEffect, useState } from 'react';
import { User } from '@/api/api';
import { OptionType } from '@/components/common/inputs/input-select';
import { useOrganizations } from '@/hooks/use-organizations';
import { UserDbModel } from '@/types/user-types';
import { AccountType } from '@/types/login-types';
import { FormRefetchContext } from '@/contexts/form-refetch-context';

export function useAddCreditsCreator(profile?: UserDbModel) {
    const { organizations } = useOrganizations();
    const [organization, setOrganization] = useState<string>();
    const [login, setLogin] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [currentAmount, setCurrentAmount] = useState<number>(0);

    const [usernames, setUsernames] = useState<OptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { refetch, forceRefetch } = useContext(FormRefetchContext);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);

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

    useEffect(() => {
        const { getUsersEnd } = User;

        setIsRefetching(true);
        getUsersEnd(organization)
            .then(users => {
                const user = users.find(user => user.login === login);

                setAmount(0);
                setCurrentAmount(user?.credits ?? 0);
            })
            .catch(() => {})
            .finally(() => setIsRefetching(false));
    }, [forceRefetch, organization]);

    const resetForm = () => {
        setAmount(0);
        setCurrentAmount(currentAmount + amount);
    };

    const onChangeOrganization = (e: any) => {
        setOrganization(e.target.value);
    };

    const onChangeLogin = (e: any) => {
        setLogin(e.target.value);
        refetch();
    };

    const onChangeAmount = (e: any) => {
        setAmount(Number(e.target.value));
    };

    return {
        usernames, isLoading,
        organization, organizations, onChangeOrganization,
        login, onChangeLogin,
        amount, onChangeAmount,
        resetForm, currentAmount, isRefetching
    };
}