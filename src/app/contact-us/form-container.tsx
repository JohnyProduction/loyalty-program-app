import styles from '@/styles/app/contact-us/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputTextarea } from '@/components/common/inputs/input-textarea';
import { Button } from '@/components/common/buttons/button';

export function FormContainer() {
    return (
        <div className={styles['contact-us-page__form-container__form-container']}>
            Form container
            <InputString label={'Full name'} name={'full-name'} />
            <InputString label={'Email'} name={'email'} />
            <InputTextarea label={'Message'} name={'message'} />
            <Button label={'Submit'} link={'/'} size="small" />
        </div>
    );
}