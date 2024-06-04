'use client';
import { useEffect, useState } from 'react';
import { UserDbModelOrg } from '@/types/user-types';
import { User } from '@/api/api';
import { toastError } from '@/utils/toast-utils';
import { FooterFragment, FooterFragmentDataType } from '@/components/common/footer-fragment';
import styles from '@/styles/components/common/footer.module.scss';

export function Footer() {
    const [user, setUser] = useState<UserDbModelOrg | null>(null);

    useEffect(() => {
        const { getCurrentUserEnd } = User;

        getCurrentUserEnd()
            .then(data => {
                setUser(data);
            })
            .catch(err => toastError(`Error occurred while fetching current user: ${err.message}.`));

    }, []);

    const company = {
        name: user?.organization,
        description: 'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.'
    };
    const footerFragmentData: FooterFragmentDataType[] = [
        {
            header: 'Links',
            paragraphs: [
                {
                    label: 'Categories',
                    link: '/categories'
                },
                {
                    label: 'Shops',
                    link: '/shops'
                },
            ]
        },
        {
            header: 'Contact',
            paragraphs: [
                {
                    label: 'Support',
                    link: '/contact-us'
                },
            ]
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