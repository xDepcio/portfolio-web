import { Roboto, Roboto_Mono } from 'next/font/google'
import './Navbar.css'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
    weight: ['100', '300', '400', '500', '700', '200', '600'],
    subsets: ['latin'],
})

export default function Navbar() {
    return (
        <div className={robotoMono.className + " nav-outer-wrapper"}>
            <div className='nav-inner-wrapper'>
                <ul className={robotoMono.className + ' nav-list'}>
                    <li>{'about'}</li>
                    <li>{'projects'}</li>
                    <li>{'contact'}</li>
                </ul>

            </div>
        </div>
    )
}
