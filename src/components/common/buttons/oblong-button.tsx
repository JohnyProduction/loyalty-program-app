import { Button, ButtonProps } from '@/components/common/buttons/button';

type OblongButtonProps = Omit<ButtonProps, 'btype'>;

export function OblongButton({ label, link, size, bgcolor }: OblongButtonProps) {
    return (
        <Button label={label} link={link} size={size} bgcolor={bgcolor} btype="oblong" />
    );
}