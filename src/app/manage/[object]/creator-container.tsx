'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { AccountType } from '@/types/login-types';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { Loader } from '@/components/common/loader';
import { useContext, useEffect, useState } from 'react';
import { UserDbModel } from '@/types/user-types';
import { User } from '@/api/api';
import { AddUsersCreator } from '@/app/manage/[object]/add-users-creator';
import { AddCreditsCreator } from '@/app/manage/[object]/add-credits-creator';
import { OrganizationsCreator } from '@/app/manage/[object]/organizations-creator';
import { AddCategoriesCreator } from '@/app/manage/[object]/add-categories-creator';
import { FormRefetchProvider } from '@/contexts/form-refetch-context';

interface CreatorContainerProps {
    object: string;
    edit: string;
}

export function CreatorContainer({ object, edit }: CreatorContainerProps) {
    const { isLoading, setEdit } = useContext(ManageCreatorContext);
    const [profile, setProfile] = useState<UserDbModel>();

    useEffect(() => {
        User.getCurrentUserEnd().then(data => setProfile(data));
    }, []);

    useEffect(() => {
        setEdit(edit);
    }, [edit]);

    const renderContainer = (user: string, object: string) => {
        if (user === AccountType.ADMINISTRATOR && object === 'users') {
            return <AddUsersCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'credits') {
            return <AddCreditsCreator profile={profile} />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'organizations') {
            return <OrganizationsCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'categories') {
            return <AddCategoriesCreator />;
        }

        if (user === AccountType.MANAGER && object === 'users') {
            return <AddUsersCreator />;
        }

        if (user === AccountType.MANAGER && object === 'credits') {
            return <AddCreditsCreator profile={profile} />;
        }

        return <>Unknown creator.</>;
    };

    return (
        <div className={styles['creator-container']}>
            {isLoading && <Loader isAbsolute={true} />}
            <FormRefetchProvider>
                {profile ? renderContainer(profile.type, object) : <Loader />}
            </FormRefetchProvider>
        </div>
    );
}