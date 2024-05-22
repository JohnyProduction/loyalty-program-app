'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { useAddCreditsCreator } from '@/hooks/manage-creators/use-add-credits-creator';
import { useContext } from 'react';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';
import { Loader } from '@/components/common/loader';
import { InputSelect } from '@/components/common/inputs/input-select';

export function AddCreditsCreator() {
    const { usernames, isLoading, login, onChangeLogin, amount, onChangeAmount } = useAddCreditsCreator();
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
        <>
            {isLoading ? <Loader isAbsolute={true} /> : (
                <form className={styles['creator-form']}>
                    <InputSelect label={'Login'} name={'login'} options={usernames} value={login} onChange={onChangeLogin} />
                    <InputString label={'Amount'} name={'amount'} value={amount} onChange={onChangeAmount} />
                    <div className={styles['navigation-box']}>
                        <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
                    </div>
                </form>
            )}
        </>
    );
}