import styles from '@/styles/components/common/buttons/button.module.scss';
import Link from 'next/link';

export interface ButtonProps {
    label: string;
    link: string;
    size?: 'small' | 'normal' | 'big';
    btype?: 'normal' | 'oblong' | 'rectangular';
    bgcolor?: 'blue' | 'orange';
}

export function Button({ label, link, size = 'normal', btype = 'normal', bgcolor = 'blue' }: ButtonProps) {
    return (
        <button className={styles['button']} data-size={size} data-btype={btype} data-bgcolor={bgcolor}>
            <Link href={link}>
                {label}
            </Link>
        </button>
    );
}