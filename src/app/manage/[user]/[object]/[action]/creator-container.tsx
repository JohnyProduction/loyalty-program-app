'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { AddUsersCreator } from '@/app/manage/[user]/[object]/[action]/add-users-creator';
import { AddCreditsCreator } from '@/app/manage/[user]/[object]/[action]/add-credits-creator';
import { AddOrganizationsCreator } from '@/app/manage/[user]/[object]/[action]/add-organizations-creator';
import { AddManagerUsersCreator } from '@/app/manage/[user]/[object]/[action]/add-manager-users-creator';
import { ChangePasswordCreator } from '@/app/manage/[user]/[object]/[action]/change-password-creator';
import { ChangeEmailCreator } from '@/app/manage/[user]/[object]/[action]/change-email-creator';
import { AccountType } from '@/types/login-types';
import { AddCategoriesCreator } from '@/app/manage/[user]/[object]/[action]/add-categories-creator';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';
import { Loader } from '@/components/common/loader';
import { useContext } from 'react';

interface CreatorContainerProps {
    user: string;
    object: string;
    action: string;
}

export function CreatorContainer({ user, object, action }: CreatorContainerProps) {
    const { isLoading } = useContext(SettingsCreatorContext);

    const renderContainer = (user: string, object: string, action: string) => {
        if (user === AccountType.ADMINISTRATOR && object === 'users' && action === 'add') {
            return <AddUsersCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'credits' && action === 'add') {
            return <AddCreditsCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'organizations' && action === 'add') {
            return <AddOrganizationsCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'password' && action === 'change') {
            return <ChangePasswordCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'email' && action === 'change') {
            return <ChangeEmailCreator />;
        }

        if (user === AccountType.ADMINISTRATOR && object === 'categories' && action === 'add') {
            return <AddCategoriesCreator />;
        }

        if (user === AccountType.MANAGER && object === 'users' && action === 'add') {
            return <AddManagerUsersCreator />;
        }

        if (user === AccountType.MANAGER && object === 'credits' && action === 'add') {
            return <AddCreditsCreator />;
        }

        if (user === AccountType.MANAGER && object === 'password' && action === 'change') {
            return <ChangePasswordCreator />;
        }

        if (user === AccountType.WORKER && object === 'password' && action === 'change') {
            return <ChangePasswordCreator />;
        }

        if (user === AccountType.WORKER && object === 'email' && action === 'change') {
            return <ChangeEmailCreator />;
        }

        return <>Unknown creator.</>;
    };

    return (
        <div className={styles['creator-container']}>
            {isLoading && <Loader isAbsolute={true} />}
            {renderContainer(user, object, action)}
        </div>
    );
}