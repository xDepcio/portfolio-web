'use client'
import './ContactNav.css'

export default function ContactNav() {

    function handleContactClick() {
        const footContact = document.getElementById('foot-contact')

        if (footContact) {
            footContact.scrollIntoView({ behavior: 'smooth' })
            footContact.classList.add('contact-clicked')

            setTimeout(() => {
                footContact.classList.remove('contact-clicked')
            }, 2000)
        }
    }

    return (
        <li onClick={handleContactClick}>{'contact'}</li>
    )
}
