import styles from '@/styles/components/common/loader.module.scss';

interface LoaderProps {
    isAbsolute?: boolean;
}

export function Loader({ isAbsolute = false }: LoaderProps) {
    return (
        <div className={styles['loader-component']} data-is-absolute={isAbsolute}>
            <div className={styles['loader-component__background']}></div>
            <span className={styles['loader']}></span>
        </div>
    );
}