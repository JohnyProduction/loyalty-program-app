import { FooterFragment, FooterFragmentProps } from '@/components/common/footer-fragment';

export function Footer() {
    const footerFragmentData: FooterFragmentProps[] = [
        {
            header: 'Nazwa firmy',
            description: 'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.'
        },
        {
            header: 'What we do',
            description: [
                'Web Design',
                'App Design',
                'Social Media Manage',
                'Market Analysis Project'
            ]
        },
        {
            header: 'My account',
            description: [
                'About Us',
                'Career',
                'Become Investor'
            ]
        },
        {
            header: 'Support',
            description: [
                'FAQ',
                'Policy',
                'Business'
            ]
        },
        {
            header: 'Contact',
            description: [
                'WhatsApp',
                'Support 24'
            ]
        }
    ];

    return (
        <footer>
            {footerFragmentData.map(fragment => {
                return <FooterFragment header={fragment.header} description={fragment.description} />;
            })}
        </footer>
    );
}