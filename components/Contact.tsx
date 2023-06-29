import Link from 'next/link'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMailForward } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <section className='contact-wrapper'>
            <h2 className='contact-header'>Contact me</h2>
            <div className='contact-means-holder'>
                <Link className='single-contact flex gap-2 items-center justify-between flex-col' href={'https://github.com/xDepcio'} >
                    <div className='flex items-center justify-start w-full gap-2'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className='inline-block'>Email</p>
                    </div>
                    <p>olek.drwal@gmail.com</p>
                </Link>
                <Link className='single-contact flex gap-2 items-center justify-between' href={'https://github.com/xDepcio'} >
                    <FontAwesomeIcon icon={faGithub} />
                    <p>Github</p>
                </Link>
                <Link className='single-contact flex gap-2 items-center justify-between' href={'https://github.com/xDepcio'} >
                    <FontAwesomeIcon icon={faGitlab} />
                    <p>Gitlab</p>
                </Link>
            </div>
        </section>
    )
}
