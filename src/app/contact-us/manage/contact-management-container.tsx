'use client';

import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { useGetContactRequests } from '@/hooks/use-contact-requests';
import { Loader } from '@/components/common/loader';
import { Icon } from '@/components/common/icon';

export function ContactManagementContainer() {
    const { requests, isFetching, onInfo, onDelete } = useGetContactRequests();

    return (
        <div className={styles['contact-management-container']}>
            {isFetching && <Loader isAbsolute={true} />}
            <div className={styles['contact-request-list']}>
                <h2>Contact request list</h2>
                <ul>
                    {isFetching
                        ? <Loader />
                        : requests.map(request => {
                            return (
                                <li key={request.subject}>
                                    <Icon src={'/pages/edit.png'} size={32} onClick={onInfo} />
                                    <Icon src={'/pages/delete.png'} size={32} onClick={onDelete} />
                                    <p>{request.subject}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}