import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { ContactRequestList } from '@/app/contact-us/manage/contact-request-list';
import { ContactCreator } from '@/app/contact-us/manage/contact-creator';

export function ContactManagementContainer() {
    return (
        <div className={styles['contact-management-container']}>
            <div className={styles['creator-container']}>
                <ContactCreator />
            </div>
            <div className={styles['contact-request-list-container']}>
                <ContactRequestList />
            </div>
        </div>
    );
}