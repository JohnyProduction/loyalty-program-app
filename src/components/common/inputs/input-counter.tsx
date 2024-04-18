'use client';

import { useCounter } from '@/hooks/use-counter';
import styles from '@/styles/components/common/inputs/input-counter.module.scss';

export function InputCounter() {
    const { count, increase, decrease } = useCounter(0);

    return (
        <div className={styles['input-counter']}>
            <button onClick={decrease}>-</button>
            <div>{count}</div>
            <button onClick={increase}>+</button>
        </div>
    );
}