'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { useFetchCollection } from '@/hooks/use-fetch-collection';
import { Loader } from '@/components/common/loader';
import { DataLinkComponent } from '@/app/manage/[object]/data-link-component';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { useEffect, useState } from 'react';
import { OrganizationModel } from '@/types/organization-types';
import { Organization } from '@/api/api';
import { toastError } from '@/utils/toast-utils';

interface DataContainerProps {
    object: string;
}

export function DataContainer({ object }: DataContainerProps) {
    const [organization, setOrganization] = useState<string>();
    const { data, isLoading } = useFetchCollection(object, organization);
    const [organizations, setOrganizations] = useState<OrganizationModel[]>([]);

    useEffect(() => {
        if (object !== 'users') {
            return;
        }

        Organization
            .getOrganizationsEnd()
            .then(data => {
                setOrganizations(data);
                setOrganization(data[0].name);
            })
            .catch((err) => toastError(err.message));
    }, []);

    const getOrganizationOptions = (organizations: OrganizationModel[]): OptionType[] => {
        return organizations.map(((organization, idx) => {
            return {
                id: idx,
                label: organization.name,
                value: organization.name
            };
        }));
    };

    const onChangeOrganization = (e: any) => setOrganization(e.target.value);

    return (
        <>
            {isLoading ?
                <Loader /> :
                <div className={styles['data-container']}>
                    {data && object !== 'credits' && <h3>{object} list</h3>}
                    {object === 'users' && (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ margin: '0 auto', width: '300px' }}>
                                <InputSelect label={'Organization'} name={'organization'} options={getOrganizationOptions(organizations)} value={organization || ''} onChange={onChangeOrganization} />
                            </div>
                        </div>
                    )}
                    <ul>
                        {data.map(el => <DataLinkComponent key={el} label={el} object={object} organization={organization} />)}
                    </ul>
                </div>
            }
        </>
    );
}