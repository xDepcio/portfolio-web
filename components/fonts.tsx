import { Roboto, Roboto_Mono, Inter } from 'next/font/google'

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const robotoMono = Roboto_Mono({
    weight: ['100', '300', '400', '500', '700', '200', '600'],
    subsets: ['latin'],
})

export const inter = Inter({ subsets: ['latin'] })
