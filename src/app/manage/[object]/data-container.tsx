'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { useFetchCollection } from '@/hooks/use-fetch-collection';
import { Loader } from '@/components/common/loader';
import Link from 'next/link';

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
                        {data.map(el => {
                            return (
                                <Link href={`/manage/${object}?edit=${el}`}>
                                    <li>{el}</li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            }
        </>
    );
}