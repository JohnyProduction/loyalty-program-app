'use client';

import Link from 'next/link';

interface LinkComponentProps {
    label: string;
    path: string;
    user: string;
}

export function LinkComponent({ label, path, user }: LinkComponentProps) {
    return (
        <Link href={`/manage/${user}${path}`}>
            <li>{label}</li>
        </Link>
    );
}