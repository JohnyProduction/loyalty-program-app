'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { useAddCreditsCreator } from '@/hooks/settings-creators/use-add-credits-creator';
import { useContext } from 'react';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function AddCreditsCreator() {
    const { login, onChangeLogin, amount, onChangeAmount } = useAddCreditsCreator();
    const { setIsLoading } = useContext(SettingsCreatorContext);

    const onSubmit = async () => {
        const { changeCreditsEnd } = User;

        try {
            setIsLoading(true);
            await changeCreditsEnd(login, Number(amount));
            toastSuccess(`Pomyślnie dodano ${amount} kredytów dla użytkownika ${login}.`);
        } catch (e: any) {
            toastError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Login'} name={'login'} value={login} onChange={onChangeLogin} />
            <InputString label={'Amount'} name={'amount'} value={amount} onChange={onChangeAmount} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}