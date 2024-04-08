import styles from '@/styles/components/common/buttons/button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    label: string;
    link: string;
    size?: 'small' | 'normal' | 'big';
}

export function Button({ label, link, size = 'normal' }: ButtonProps) {
    return (
        <button className={styles['button']} data-size={size}>
            <Link href={link}>
                {label}
            </Link>
        </button>
    );
}