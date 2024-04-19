import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/contact-us/page.module.scss';
import { Footer } from '@/components/common/footer';
import { PageBox } from '@/app/page-box';
import { FormContainer } from '@/app/contact-us/form-container';
import { TextContainer } from '@/app/contact-us/text-container';

export default function ContactUsPage() {
    return (
        <main className={styles['contact-us-page']}>
            <TopBar />
            <PageBox>
                <div className={styles['contact-us-page__form-container']}>
                    <TextContainer />
                    <FormContainer />
                </div>
                <Footer />
            </PageBox>
        </main>
    );
}