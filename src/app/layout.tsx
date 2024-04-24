import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/app/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Loyalty Application',
    description: 'Get bigger profits using this application.',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
