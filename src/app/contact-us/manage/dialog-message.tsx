'use client';

import { ContactRequestModel } from '@/types/contact-types';
import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { SubmitButton } from '@/components/common/buttons/submit-button';

interface DialogMessageProps {
    contact?: ContactRequestModel;
    setIsDisplaying: (val: boolean) => void;
}

export function DialogMessage({ contact, setIsDisplaying }: DialogMessageProps) {
    const onCancel = () => {
        setIsDisplaying(false);

        const dialog = document.querySelector('dialog');

        if (dialog) {
            dialog.close();
        }
    };

    return (
        <dialog className={styles['dialog-message']}>
            <div>
                <h3>{contact?.subject}</h3>
                <p>{contact?.body}</p>
                <div>
                    <SubmitButton label={'Ok'} size={'small'} onSubmit={onCancel} />
                </div>
            </div>
        </dialog>
    );
}