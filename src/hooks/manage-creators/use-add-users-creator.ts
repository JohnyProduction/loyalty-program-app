'use client';

import { useEffect, useState } from 'react';
import { AccountType } from '@/types/login-types';
import { OptionType } from '@/components/common/inputs/input-select';
import { Organization } from '@/api/api';

export function useAddUsersCreator() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');
    const [role, setRole] = useState<AccountType>(AccountType.WORKER);

    const [organizationOptions, setOrganizationOptions] = useState<OptionType[]>([]);

    useEffect(() => {
        const { getOrganizationsEnd } = Organization;

        getOrganizationsEnd()
            .then(data => {
                const options: OptionType[] = data.map((model, idx) => ({
                    id: idx,
                    label: model.name,
                    value: model.name
                }));

                setOrganizationOptions(options);
                setOrganization(data[0].name);
            });
    }, []);

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
        organization, onChangeOrganization, organizationOptions,
        role, onChangeRole
    };
}