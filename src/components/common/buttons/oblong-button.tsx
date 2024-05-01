import { Button, ButtonProps } from '@/components/common/buttons/button';

export type OblongButtonProps = Omit<ButtonProps, 'btype'>;

export function OblongButton({ label, link, size, bgcolor, onClick }: OblongButtonProps) {
    return (
        <Button label={label} link={link} size={size} bgcolor={bgcolor} btype="oblong" onClick={onClick} />
    );
}