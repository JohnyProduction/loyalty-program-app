import styles from '@/styles/components/common/footer.module.scss';
import Link from 'next/link';
export type FooterFragmentDataType = {
    header: string;
    paragraphs: FooterParagraph[];
};
export type FooterParagraph = {
    label: string;
    link: string;
};
export interface FooterFragmentProps {
    footerFragmentData: FooterFragmentDataType
}

export function FooterFragment({ footerFragmentData }: FooterFragmentProps) {
    return (
        <div className={styles['footer-fragment__item']}>
            <h3>{footerFragmentData.header}</h3>
            <ul>
                {footerFragmentData.paragraphs.map((paragraph, index) => (
                    <li key={index}>
                        <Link href={paragraph.link}>{paragraph.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}