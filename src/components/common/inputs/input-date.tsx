'use client';

import styles from '@/styles/components/common/inputs/input-string.module.scss';

interface InputDateProps {
    label: string;
    name: string;
    width?: string;
    value: Date;
    onChange: (event: any) => void;
}

export function InputDate({ label, name, width = '100%', value, onChange }: InputDateProps) {
    const proceedDateValue = (value: Date) => {
        const date = new Date(value).toLocaleString();

        return date.substring(0, 16);
    };

    return (
        <div className={styles['input-date']}>
            <label htmlFor={name}>{label}:</label>
            <input type="datetime-local" name={name} style={{ width }} value={proceedDateValue(value)} onChange={onChange} />
        </div>
    );
}