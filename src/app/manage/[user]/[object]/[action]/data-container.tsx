'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { useFetchCollection } from '@/hooks/use-fetch-collection';
import { Loader } from '@/components/common/loader';

interface DataContainerProps {
    user: string;
    object: string;
    action: string;
}

export function DataContainer({ user, object, action }: DataContainerProps) {
    const { data, isLoading } = useFetchCollection(object, action);

    return (
        <>
            {isLoading ?
                <Loader /> :
                <div className={styles['data-container']}>
                    {data.length > 0 && <h3>{object} list</h3>}
                    <ul>
                        {data.map(el => {
                            return <li>{el}</li>;
                        })}
                    </ul>
                </div>
            }
        </>
    );
}