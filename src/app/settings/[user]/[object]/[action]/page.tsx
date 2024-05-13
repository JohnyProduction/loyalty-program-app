import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { LinkContainer } from '@/app/settings/[user]/[object]/[action]/link-container';
import { CreatorContainer } from '@/app/settings/[user]/[object]/[action]/creator-container';
import { PageBox } from '@/app/page-box';
import { redirect } from 'next/navigation';
import { areValidParams } from '@/utils/setting-utils';
import { SubSettingsHeader } from '@/app/settings/[user]/[object]/[action]/sub-settings-header';

interface SettingsPageProps {
    params: Record<string, any>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    if (!areValidParams(user, object, action)) {
        redirect('/');
    }

    return (
        <main className={styles['settings-page']}>
            <TopBar />
            <PageBox>
                <SubSettingsHeader object={object} action={action} />
                <div className={styles['content-box']}>
                    <LinkContainer user={user} object={object} action={action} />
                    <CreatorContainer user={user} object={object} action={action} />
                </div>
                <Footer />
            </PageBox>
        </main>
    );
}