'use client';

import Link from 'next/link';

interface LinkComponentProps {
    label: string;
    path: string;
}

export function LinkComponent({ label, path }: LinkComponentProps) {
    return (
        <Link href={`/manage/${path}`}>
            <li>{label}</li>
        </Link>
    );
}