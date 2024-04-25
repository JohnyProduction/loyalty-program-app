'use client';

import styles from '@/styles/components/common/inputs/input-counter.module.scss';
import { CounterProps } from '@/types/product-types';

interface InputCounterProps extends CounterProps {}

export function InputCounter({ count, decrease, increase }: InputCounterProps) {
    return (
        <div className={styles['input-counter']}>
            <button onClick={decrease}>-</button>
            <div>{count}</div>
            <button onClick={increase}>+</button>
        </div>
    );
}