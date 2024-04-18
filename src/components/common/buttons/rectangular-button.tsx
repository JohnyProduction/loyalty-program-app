import { Button, ButtonProps } from '@/components/common/buttons/button';

type RectangularButtonProps = Omit<ButtonProps, 'btype'>;

export function RectangularButton({ label, link, size }: RectangularButtonProps) {
    return (
        <Button label={label} link={link} size={size} btype="rectangular" />
    );
}