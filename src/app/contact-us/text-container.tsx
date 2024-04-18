import styles from '@/styles/app/contact-us/page.module.scss';

export function TextContainer() {
    return (
        <div className={styles['contact-us-page__form-container__text-container']}>
            <h1>Let's Get in Touch!</h1>
            <p>Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We're eager to assist you.</p>
            <p>Nice hearing from you!</p>
        </div>
    );
}