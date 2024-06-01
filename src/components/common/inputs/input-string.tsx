'use client';

import styles from '@/styles/components/common/inputs/input-string.module.scss';
import { useState } from 'react';

interface InputStringProps {
    label: string;
    name: string;
    width?: string;
    value: string;
    isPassword?: boolean;
    disabled?: boolean;
    onChange: (event: any) => void;
    isValid?: boolean;
    isRequired?: boolean;
}

export function InputString({ label, name, width = '100%', value, onChange, isPassword = false, disabled = false, isValid = true, isRequired = false }: InputStringProps) {
    const [wasEverFocused, setWasEverFocused] = useState<boolean>(false);
    const onFocus = () => setWasEverFocused(true);

    const isDataValid = !wasEverFocused || isValid;

    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}: {isRequired ? '(*)' : ''}</label>
            <input type={isPassword ? 'password' : 'string'} name={name} style={{ width }} value={value} onChange={onChange} disabled={disabled} required={isRequired} data-is-valid={isDataValid} onFocus={onFocus} />
        </div>
    );
}