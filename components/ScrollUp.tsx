'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ScrollUp.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function ScrollUp() {

    useEffect(() => {
        const scrollUp = document.querySelector('.scroll-up-wrapper')
        const scrollHandle = () => {
            if (window.scrollY > 500) {
                scrollUp?.classList.add('show')
                scrollUp?.classList.remove('hide')
                scrollUp?.classList.remove('initial')
            }
            else {
                scrollUp?.classList.remove('show')
                scrollUp?.classList.add('hide')
            }
        }

        window.addEventListener('scroll', scrollHandle)

        return () => {
            window.removeEventListener('scroll', scrollHandle)
        }

    }, [])


    return (
        <div onClick={() => scroll({ top: 0, behavior: 'smooth' })} className="scroll-up-wrapper hide initial">
            <FontAwesomeIcon className='scroll-arrow' icon={faArrowUp} />
        </div>
    )
}
