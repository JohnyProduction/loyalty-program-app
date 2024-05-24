'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { useFetchCollection } from '@/hooks/use-fetch-collection';
import { Loader } from '@/components/common/loader';
import { DataLinkComponent } from '@/app/manage/[object]/data-link-component';

interface DataContainerProps {
    object: string;
}

export function DataContainer({ object }: DataContainerProps) {
    const { data, isLoading } = useFetchCollection(object);

    return (
        <>
            {isLoading ?
                <Loader /> :
                <div className={styles['data-container']}>
                    {data.length > 0 && <h3>{object} list</h3>}
                    <ul>
                        {data.map(el => <DataLinkComponent key={el} label={el} object={object} />)}
                    </ul>
                </div>
            }
        </>
    );
}