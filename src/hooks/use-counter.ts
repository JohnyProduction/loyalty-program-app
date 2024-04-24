'use client';

import { useState } from 'react';
import { CounterProps } from '@/types/product-types';

export function useCounter(initialValue = 1): CounterProps {
    const [count, setCount] = useState(initialValue >= 1 ? initialValue : 1);

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrease = () => {
        if (count === 1) {
            return;
        }

        setCount(prevCount => prevCount - 1);
    };

    return {
        count,
        increase,
        decrease
    };
}