'use client';

import styles from '@/styles/components/common/inputs/input-string.module.scss';

interface InputNumberProps {
    label: string;
    name: string;
    width?: string;
    value: number;
    onChange: (event: any) => void;
}

export function InputNumber({ label, name, width = '100%', value, onChange }: InputNumberProps) {
    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}:</label>
            <input type="number" name={name} style={{ width }} value={value} onChange={onChange} />
        </div>
    );
}