import Link from 'next/link';

interface LinkComponentProps {
    label: string;
    path: string;
    user: string;
}

export function LinkComponent({ label, path, user }: LinkComponentProps) {
    return (
        <li>
            <Link href={`/settings/${user}${path}`}>
                {label}
            </Link>
        </li>
    );
}