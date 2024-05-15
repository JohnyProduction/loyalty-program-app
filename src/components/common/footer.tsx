import { FooterFragment, FooterFragmentDataType } from '@/components/common/footer-fragment';
import styles from '@/styles/components/common/footer.module.scss';

export function Footer() {
    const company = {
        name: 'Nazwa firmy',
        description: 'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.'
    };
    const footerFragmentData: FooterFragmentDataType[] = [
        {
            header: 'Contact',
            paragraphs:{
                label: 'Support 24',
                link: '/contact-us'
            }
        }
    ];

    return (
        <footer className={styles['footer']}>
            <div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
            </div>
            <div className={styles['footer-fragment__container']}>
                {footerFragmentData.map(fragment => {
                    return <FooterFragment footerFragmentData={fragment} key={Math.random()} />;
                })}
            </div>
        </footer>
    );
}