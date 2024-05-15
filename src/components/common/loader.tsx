import styles from '@/styles/components/common/loader.module.scss';

export function Loader() {
    return (
        <div className={styles['loader-component']}>
            <div className={styles['loader-component__background']}></div>
            <span className={styles['loader']}></span>
        </div>
    );
}