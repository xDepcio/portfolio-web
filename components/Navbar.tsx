import { Roboto, Roboto_Mono } from 'next/font/google'
import './Navbar.css'
import Link from 'next/link'
import RocketSvg from './resources/RocketSvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faRocket } from '@fortawesome/free-solid-svg-icons'

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
                <Link href={'/'} className='mr-auto'>
                    <div className='nav-rocket-wrapper'>
                        <FontAwesomeIcon className='nav-rocket' icon={faRocket} />
                        <FontAwesomeIcon className='nav-rocket-fire' icon={faFire} />
                    </div>
                </Link>
                <ul className={robotoMono.className + ' nav-list'}>
                    <Link href={'/about'}>
                        <li>{'about'}</li>
                    </Link>
                    <Link href={'/projects'}>
                        <li>{'projects'}</li>
                    </Link>
                    <li>{'contact'}</li>
                </ul>

            </div>
        </div>
    )
}
