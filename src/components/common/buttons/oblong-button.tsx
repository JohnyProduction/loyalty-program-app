import { Button, ButtonProps } from '@/components/common/buttons/button';

type OblongButtonProps = Omit<ButtonProps, 'btype'>;

export function OblongButton({ label, link, size }: OblongButtonProps) {
    return (
        <Button label={label} link={link} size={size} btype="oblong" />
    );
}