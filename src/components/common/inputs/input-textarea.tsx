'use client';

import styles from '@/styles/components/common/inputs/input-textarea.module.scss';

interface InputTextareaProps {
    label: string;
    name: string;
    width?: string;
    rows?: number;
    value: string;
    onChange: (event: any) => void;
}

export function InputTextarea({ label, name, width = '100%', rows = 6, value, onChange }: InputTextareaProps) {
    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}:</label>
            <textarea name={name} rows={rows} style={{ width: `calc(${width} - 2px)` }} value={value} onChange={onChange} />
        </div>
    );
}