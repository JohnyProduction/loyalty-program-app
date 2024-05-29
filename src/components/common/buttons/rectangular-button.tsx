import { Button, ButtonProps } from '@/components/common/buttons/button';

type RectangularButtonProps = Omit<ButtonProps, 'btype'>;

export function RectangularButton({ label, link, size, bgcolor, onClick, disabled }: RectangularButtonProps) {
    return (
        <Button label={label} link={link} size={size} bgcolor={bgcolor} btype="rectangular" disabled={disabled} onClick={onClick} />
    );
}