'use client';

import { useEffect, useState } from 'react';
import { User } from '@/app/api/api';
import { UserDbModelOrg } from '@/types/user-types';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { toastSuccess } from '@/utils/toast-utils';

export function ChangeEmailCreator() {
    const [user, setUser] = useState<UserDbModelOrg>();
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const { getCurrentUserEnd } = User;

        getCurrentUserEnd().then(data => setUser(data));
    }, []);

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const onSubmit = () => {
        const { editUserMailEnd } = User;

        user!.latestUpdate = new Date();
        user!.email = email;

        editUserMailEnd(user!).then(data => toastSuccess(data));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}