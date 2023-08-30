import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ScrollUp from '@/components/ScrollUp'
import FadeAnimationHandle from '@/components/FadeAnimationHandle'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import Blobs from '@/components/Blobs'
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Aleksander Drwal | Portfolio',
    description: 'Aleksander Drwal web developer portfolio site.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader color='#ff6b6b' />
                <Blobs />
                <Toaster />
                <Navbar />
                <ScrollUp />
                <FadeAnimationHandle />
                <Analytics />
                {children}
                <Footer />
            </body>
        </html>
    )
}
