'use client';

import styles from '@/styles/components/common/inputs/input-string.module.scss';
import { useState } from 'react';

interface InputNumberProps {
    label: string;
    name: string;
    width?: string;
    value: number;
    onChange: (event: any) => void;
    min?: number;
    isValid?: boolean;
    isRequired?: boolean;
}

export function InputNumber({ label, name, width = '100%', value, onChange, min = 0, isValid = true, isRequired = false }: InputNumberProps) {
    const [wasEverFocused, setWasEverFocused] = useState<boolean>(false);
    const onFocus = () => setWasEverFocused(true);

    const isDataValid = !wasEverFocused || isValid;

    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}: {isRequired ? '(*)' : ''}</label>
            <input type="number" name={name} style={{ width }} value={value} onChange={onChange} min={min} onFocus={onFocus} data-is-valid={isDataValid} />
        </div>
    );
}