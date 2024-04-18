import { Button, ButtonProps } from '@/components/common/buttons/button';

type RectangularButtonProps = Omit<ButtonProps, 'btype'>;

export function RectangularButton({ label, link, size, bgcolor }: RectangularButtonProps) {
    return (
        <Button label={label} link={link} size={size} bgcolor={bgcolor} btype="rectangular" />
    );
}