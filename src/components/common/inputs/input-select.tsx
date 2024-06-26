'use client';

import styles from '@/styles/components/common/inputs/input-select.module.scss';

export interface OptionType {
    id: number;
    value: string;
    label: string;
}

interface InputSelectProps {
    label: string;
    name: string;
    width?: string;
    options: OptionType[];
    value: string;
    disabled?: boolean;
    onChange: (event: any) => void;
}

export function InputSelect({ label, name, width = '100%', options, value, onChange, disabled = false }: InputSelectProps) {
    return (
        <div className={styles['input-select']}>
            <label htmlFor={name}>{label}:</label>
            <select name={name} style={{ width }} value={value} onChange={onChange} disabled={disabled}>
                {options.map(option => {
                    return <option key={option.id} value={option.value}>{option.label}</option>;
                })}
            </select>
        </div>
    );
}