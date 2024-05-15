import styles from '@/styles/components/common/footer.module.scss';

export type FooterFragmentDataType = {
    header: string;
    paragraphs: {
        label: string,
        link: string,
    };
};

export interface FooterFragmentProps {
    footerFragmentData: FooterFragmentDataType
}

export function FooterFragment({ footerFragmentData }: FooterFragmentProps) {
    return (
        <div className={styles['footer-fragment__item']}>
            <h3>{footerFragmentData.header}</h3>
            <ul>
                <li><a href={footerFragmentData.paragraphs.link}>{footerFragmentData.paragraphs.label}</a></li>
            </ul>
        </div>
    );
}