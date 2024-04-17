import { ReactNode } from 'react';
import styles from '@/styles/app/page-box.module.scss';

interface PageBoxProps {
    children: ReactNode;
}

export function PageBox({ children }: PageBoxProps) {
    return (
        <div className={styles['page-box']}>
            {children}
        </div>
    );
}