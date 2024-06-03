import styles from '@/styles/app/contact-us/manage/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { ContactManagementContainer } from '@/app/contact-us/manage/contact-management-container';

export default function ManageContactUsPage() {
    return (
        <main className={styles['manage-contact-us-page']}>
            <TopBar />
            <PageBox>
                <ContactManagementContainer />
                <Footer />
            </PageBox>
        </main>
    );
}