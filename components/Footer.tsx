import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import Link from "next/link";
import FooterEmail from "./FooterEmail";

export default function Footer() {

    return (
        <footer>
            <div className="foot-main">
                <h3>Created and owned by</h3>
                <h2>Aleksander Drwal</h2>
                <p>All rights reserved</p>
            </div>
            <div className="foot-nav">
                <h3>Page navigation</h3>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/projects'}>Projects</Link>
                    </li>
                </ul>
            </div>
            <div id="foot-contact" className="foot-contact">
                <h3>Contact</h3>
                <ul>
                    <FooterEmail />
                    <Link href={'https://github.com/xDepcio'} target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            <p>Github</p>
                        </li>
                    </Link>
                    <Link href={'https://gitlab-stud.elka.pw.edu.pl/adrwal'} target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faGitlab} />
                            <p>Gitlab</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}
