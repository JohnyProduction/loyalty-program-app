'use client';

import { InputString } from '@/components/common/inputs/input-string';
import { useAddUsersCreator } from '@/hooks/settings-creators/use-add-users-creator';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { AccountTypes } from '@/types/login-types';
import styles from '@/styles/app/contact-us/page.module.scss';
import { SubmitButton } from '@/components/common/buttons/submit-button';

export function AddUsersCreator() {
    const { fullName, onChangeFullName, email, onChangeEmail, role, onChangeRole } = useAddUsersCreator();
    const roleOptions: OptionType[] = [
        { id: 1, label: AccountTypes.ADMINISTRATOR, value: 'administrator' },
        { id: 2, label: AccountTypes.MANAGER, value: 'manager' },
        { id: 3, label: AccountTypes.WORKER, value: 'worker' }
    ];
    const onSubmit = () => {
        console.log('Submitted... send request over here');
    };

    return (
        <form>
            <InputString label={'Full name'} name={'full-name'} value={fullName} onChange={onChangeFullName} />
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} />
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={roleOptions} />
            <div className={styles['contact-us-page__form-container__navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}