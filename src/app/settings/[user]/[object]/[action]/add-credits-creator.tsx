'use client';

import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { User } from '@/app/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { useAddCreditsCreator } from '@/hooks/settings-creators/use-add-credits-creator';

export function AddCreditsCreator() {
    const { login, onChangeLogin, amount, onChangeAmount } = useAddCreditsCreator();

    const onSubmit = async () => {
        const { changeCreditsEnd } = User;

        try {
            await changeCreditsEnd(login, Number(amount));
            toastSuccess(`Pomyślnie dodano ${amount} kredytów dla użytkownika ${login}.`);
        } catch (e: any) {
            toastError(e.message);
        }
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Login'} name={'login'} value={login} onChange={onChangeLogin} />
            <InputString label={'Amount'} name={'amount'} value={amount} onChange={onChangeAmount} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}