import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { LinkContainer } from '@/app/manage/[user]/[object]/[action]/link-container';
import { CreatorContainer } from '@/app/manage/[user]/[object]/[action]/creator-container';
import { PageBox } from '@/app/page-box';
import { redirect } from 'next/navigation';
import { areValidParams } from '@/utils/setting-utils';
import { SubSettingsHeader } from '@/app/manage/[user]/[object]/[action]/sub-settings-header';
import { SettingsCreatorProvider } from '@/contexts/settings-creator-context';

interface SettingsPageProps {
    params: Record<string, any>;
}

export default function ManagePage({ params }: SettingsPageProps) {
    const { user, object, action } = params;

    if (!areValidParams(user, object, action)) {
        redirect('/');
    }

    return (
        <main className={styles['manage-page']}>
            <TopBar />
            <PageBox>
                <SubSettingsHeader object={object} action={action} />
                <div className={styles['content-box']}>
                    <SettingsCreatorProvider>
                        <LinkContainer user={user} object={object} action={action} />
                        <CreatorContainer user={user} object={object} action={action} />
                    </SettingsCreatorProvider>
                </div>
                <Footer />
            </PageBox>
        </main>
    );
}