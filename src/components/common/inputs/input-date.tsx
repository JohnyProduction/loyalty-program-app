'use client';

import styles from '@/styles/components/common/inputs/input-string.module.scss';

interface InputDateProps {
    label: string;
    name: string;
    width?: string;
    value: string;
    onChange: (event: any) => void;
}

export function InputDate({ label, name, width = '100%', value, onChange }: InputDateProps) {
    return (
        <div className={styles['input-date']}>
            <label htmlFor={name}>{label}:</label>
            <input type="date" name={name} style={{ width }} value={value} onChange={onChange} />
        </div>
    );
}