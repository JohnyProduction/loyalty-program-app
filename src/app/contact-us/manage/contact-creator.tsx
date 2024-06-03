'use client';

import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { useAddContact } from '@/hooks/use-add-contact';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';

export function ContactCreator() {
    const { onAddContact, name, onChangeName, email, onChangeEmail, phone, onChangePhone, position, onChangePosition } = useAddContact();

    const emailRegexp = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    const isValidEmail = emailRegexp.test(email);
    const isValidName = name.length > 3;
    const isValidPhone = new RegExp('^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$').test(phone);
    const isValidPosition = position.length > 3;
    const isDisabledSubmit = !isValidEmail || !isValidName || !isValidPhone;

    return (
        <div className={styles['contact-creator']}>
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} isRequired={true} isValid={isValidEmail} />
            <InputString label={'Name'} name={'name'} value={name} onChange={onChangeName} isValid={isValidName} />
            <InputString label={'Phone'} name={'phone'} value={phone} onChange={onChangePhone} isRequired={true} isValid={isValidPhone} />
            <InputString label={'Position'} name={'position'} value={position} onChange={onChangePosition} isValid={isValidPosition} />
            <SubmitButton label={'Add a new contact'} onSubmit={onAddContact} size={'small'} disabled={isDisabledSubmit} />
        </div>
    );
}