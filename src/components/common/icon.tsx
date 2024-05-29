import Link from 'next/link';
import styles from '@/styles/components/common/icon.module.scss';

interface IconProps {
    href?: string;
    src: string;
    size: number;
    onClick?: (e: any) => void;
}

export function Icon({ href, src, size, onClick }: IconProps) {
    if (href) {
        return (
            <div className={styles['icon']} onClick={onClick}>
                <Link href={href}>
                    <img src={src} alt={src} width={size} height={size} />
                </Link>
            </div>
        );
    }

    return (
        <div className={styles['icon']} onClick={onClick}>
            <img src={src} alt={src} width={size} height={size} />
        </div>
    );
}