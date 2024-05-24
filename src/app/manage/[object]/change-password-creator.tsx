'use client';

import { useContext, useState } from 'react';
import styles from '@/styles/app/manage/[object]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { User } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';

export function ChangePasswordCreator() {
    const [password, setPassword] = useState<string>('');
    const { setIsLoading } = useContext(ManageCreatorContext);

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        const { setPasswordEnd } = User;

        setIsLoading(true);
        setPasswordEnd(password)
            .then(data => toastSuccess(data))
            .finally(() => setIsLoading(false));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}