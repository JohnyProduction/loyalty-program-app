'use client';

import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { Loader } from '@/components/common/loader';
import { Contact } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { Icon } from '@/components/common/icon';
import { useGetContactRequests } from '@/hooks/use-contact-requests';
import { useState } from 'react';
import { DialogMessage } from '@/app/contact-us/manage/dialog-message';
import { ContactRequestModel } from '@/types/contact-types';

export function ContactRequestList() {
    const { requests, isFetching, refetch } = useGetContactRequests();
    const [, setProceeding] = useState<boolean>(false);
    const [isDisplaying, setIsDisplaying] = useState<boolean>(false);
    const [contact, setContact] = useState<ContactRequestModel>();

    return (
        <div className={styles['contact-request-list']}>
            <h2>Contact request list</h2>
            <ul>
                {isFetching
                    ? <Loader />
                    : requests.map(request => {
                        const onInfo = () => {
                            setContact(request);
                            setIsDisplaying(true);

                            const dialog = document.querySelector('dialog');

                            if (dialog) {
                                dialog.showModal();
                            }
                        };

                        const onDelete = async () => {
                            setProceeding(true);

                            const confirmed = confirm('Would you like to delete this contact request element?');

                            if (!confirmed) {
                                return;
                            }

                            const { deleteContactRequestEnd } = Contact;

                            try {
                                const res = await deleteContactRequestEnd(request.contReqId ?? 0);

                                toastSuccess(res);
                                refetch();
                            } catch (err: any) {
                                toastError(err.message);
                            } finally {
                                setProceeding(false);
                            }
                        };

                        return (
                            <li key={request.subject}>
                                {/*{proceeding && <Loader isAbsolute={true} />}*/}
                                <Icon src={'/pages/edit.png'} size={32} onClick={onInfo} />
                                <Icon src={'/pages/delete.png'} size={32} onClick={onDelete} />
                                <p>{request.subject}</p>
                            </li>
                        );
                    })
                }
            </ul>
            {!isFetching && <p className={styles['request-count']}>Found {requests.length} request{requests.length === 0 ? '' : 's'}.</p>}
            {isDisplaying && contact && <DialogMessage contact={contact} setIsDisplaying={setIsDisplaying} />}
        </div>
    );
}