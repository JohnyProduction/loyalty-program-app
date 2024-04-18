import styles from '@/styles/app/contact-us/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputTextarea } from '@/components/common/inputs/input-textarea';
import { OblongButton } from '@/components/common/buttons/oblong-button';

export function FormContainer() {
    return (
        <div className={styles['contact-us-page__form-container__form-container']}>
            <InputString label={'Full name'} name={'full-name'} />
            <InputString label={'Email'} name={'email'} />
            <InputTextarea label={'Message'} name={'message'} />
            <div className={styles['contact-us-page__form-container__navigation-box']}>
                <OblongButton label={'Submit'} link={'/'} size="small" />
            </div>
        </div>
    );
}