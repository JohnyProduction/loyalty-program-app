import styles from '@/styles/components/common/inputs/input-string.module.scss';

interface InputStringProps {
    label: string;
    name: string;
    width?: string;
}

export function InputString({ label, name, width = '100%' }: InputStringProps) {
    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}:</label>
            <input type="string" name={name} style={{ width }} />
        </div>
    );
}