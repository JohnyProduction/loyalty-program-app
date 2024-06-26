import styles from '@/styles/app/manage/[object]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { PageBox } from '@/app/page-box';
import { SubSettingsHeader } from '@/app/manage/[object]/sub-settings-header';
import { ManageCreatorProvider } from '@/contexts/manage-creator-context';
import { LinkContainer } from '@/app/manage/[object]/link-container';
import { CreatorContainer } from '@/app/manage/[object]/creator-container';
import { DataContainer } from '@/app/manage/[object]/data-container';

interface ManageObjectPageProps {
    params: Record<'object', any>;
    searchParams: Record<'edit', any>;
}

export default function ManagePage({ params, searchParams }: ManageObjectPageProps) {
    const { object } = params;
    const { edit } = searchParams;

    return (
        <main className={styles['manage-page']}>
            <TopBar />
            <PageBox>
                <SubSettingsHeader object={object} />
                <ManageCreatorProvider>
                    <div className={styles['content-box']}>
                        <LinkContainer />
                        <CreatorContainer object={object} edit={edit} />
                    </div>
                    <DataContainer object={object} />
                </ManageCreatorProvider>
                <Footer />
            </PageBox>
        </main>
    );
}