'use client';

import styles from '@/styles/components/common/buttons/button.module.scss';
import Link from 'next/link';

export interface ButtonProps {
    label: string;
    link: string;
    size?: 'small' | 'normal' | 'big';
    btype?: 'normal' | 'oblong' | 'rectangular';
    bgcolor?: 'blue' | 'orange';
    onClick?: (e: any) => void;
}

export function Button({ label, link, size = 'normal', btype = 'normal', bgcolor = 'blue', onClick = (e) => { e.stopPropagation(); } }: ButtonProps) {
    return (
        <button className={styles['button']} data-size={size} data-btype={btype} data-bgcolor={bgcolor} onClick={onClick}>
            <Link href={link}>
                {label}
            </Link>
        </button>
    );
}