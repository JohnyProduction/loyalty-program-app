import styles from '@/styles/app/contact-us/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';

export function FormContainer() {
    return (
        <div className={styles['contact-us-page__form-container__form-container']}>
            Form container
            <InputString label={'Full name'} name={'full-name'} />
            <InputString label={'Email'} name={'email'} />
        </div>
    );
}