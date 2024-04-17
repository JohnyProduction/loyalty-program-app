import styles from '@/styles/components/common/inputs/input-string.module.scss';

interface InputStringProps {
    label: string;
    name: string;
}

export function InputString({ label, name }: InputStringProps) {
    return (
        <div className={styles['input-string']}>
            <label htmlFor={name}>{label}:</label>
            <input type="string" name={name} />
        </div>
    );
}