import { Button, ButtonProps } from '@/components/common/buttons/button';

export type OblongButtonProps = Omit<ButtonProps, 'btype'>;

export function OblongButton({ label, link, size, bgcolor, disabled, onClick }: OblongButtonProps) {
    return (
        <Button label={label} link={link} size={size} bgcolor={bgcolor} btype="oblong" disabled={disabled} onClick={onClick} />
    );
}