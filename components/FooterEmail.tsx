'use client'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-hot-toast";

export default function FooterEmail() {
    function handleCopyEmail() {
        navigator.clipboard.writeText('olek.drwal@gmail.com')
        toast("Email copied to clipboard", {
            icon: "📋",
            style: {
                background: 'linear-gradient(160deg, rgba(255, 107, 107, 1) 0%, rgba(136, 4, 65, 1) 100%)',
                color: 'whitesmoke',
            }
        })
    }

    return (
        <li onClick={handleCopyEmail}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>olek.drwal@gmail.com</p>
        </li>
    )
}
