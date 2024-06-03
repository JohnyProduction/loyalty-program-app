'use client';

import styles from '@/styles/app/contact-us/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputTextarea } from '@/components/common/inputs/input-textarea';
import { useContactForm } from '@/hooks/use-contact-form';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { Loader } from '@/components/common/loader';

export function FormContainer() {
    const { subject, onSubjectChange, message, onMessageChange, onSubmit, isSending } = useContactForm();

    return (
        <div className={styles['contact-us-page__form-container__form-container']}>
            {isSending && <Loader isAbsolute={true} />}
            <InputString label={'Subject'} name={'subject'} value={subject} onChange={onSubjectChange} />
            <InputTextarea label={'Message'} name={'message'} value={message} onChange={onMessageChange} />
            <div className={styles['contact-us-page__form-container__navigation-box']}>
                <SubmitButton label={'Submit'} onSubmit={onSubmit} size="small" />
            </div>
        </div>
    );
}