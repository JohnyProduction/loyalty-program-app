'use client';

import { useCounter } from '@/hooks/use-counter';

export function InputCounter() {
    const { count, increase, decrease } = useCounter(0);

    return (
        <div>
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}