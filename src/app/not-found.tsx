import styles from '@/styles/app/not-found.module.scss';
import { Button } from '@/components/common/buttons/button';

export default function NotFoundPage() {
    return (
        <div className={styles['not-found-page']}>
            <img src="/pages/not-found.png" alt="Not found image" />
            <div className={styles['not-found-page__navigation']}>
                <p className={styles['not-found-page__text']}>Opps! Page not found!</p>
                <Button label={'Back to home'} link="/" size={'small'} />
            </div>
        </div>
    );
}