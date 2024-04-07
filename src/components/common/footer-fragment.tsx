import styles from '@/styles/components/common/footer.module.scss';

export type FooterFragmentDataType = {
    header: string;
    paragraphs: string[];
};

export interface FooterFragmentProps {
    footerFragmentData: FooterFragmentDataType
}

export function FooterFragment({ footerFragmentData }: FooterFragmentProps) {
    return (
        <div className={styles['footer-fragment__item']}>
            <h3>{footerFragmentData.header}</h3>
            <ul>
                {footerFragmentData.paragraphs.map(el => <li key={el}>{el}</li>)}
            </ul>
        </div>
    );
}