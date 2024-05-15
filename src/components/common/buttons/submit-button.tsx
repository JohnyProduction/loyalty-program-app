import { OblongButton, OblongButtonProps } from '@/components/common/buttons/oblong-button';

type SubmitButton = Omit<OblongButtonProps, 'onClick' | 'link'> & {
    onSubmit: () => void;
};

export function SubmitButton({ label, bgcolor, size, onSubmit }: SubmitButton) {
    const onClick = (e: any) => {
        e.stopPropagation();
        onSubmit();
    };

    return <OblongButton label={label} link={''} bgcolor={bgcolor} size={size} onClick={onClick} />;
}