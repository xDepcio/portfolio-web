import Image from 'next/image'
import './Projects.css'
import { robotoMono } from './fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, faBook } from '@fortawesome/free-solid-svg-icons'
import ProjectsPane from './ProjectsPane'
import { BsCodeSlash } from 'react-icons/bs'

export const revalidate = 1

export default function Projects() {
    return (
        <div className="projects-wrapper">
            <p className={robotoMono.className + " projects-tag reveal"}>{'<projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'<personal projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <ProjectsPane
                    description='Minecraft server site with React on frontend, NodeJS on backend with Sequalize for Database and with Stripe for payments.'
                    imageUrl='/mc/mc-server-tiles-16-9.png'
                    title='Game server site'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/mc-website-full'
                />
                <ProjectsPane
                    description='Personal portfolio site made with NextJS and TailwindCSS.'
                    imageUrl='/portfolio/portfolio-tiles-16-9.png'
                    title='Personal portfolio'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/portfolio-web'
                />
                <ProjectsPane
                    description='Eccomerce site with React on frontend, NodeJS on backend with Sequalize for Database and with Stripe for payments.'
                    imageUrl='/ecommerce/ecc-tiles-16-9-v2.png'
                    title='Ecommerce site'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/eccomerce_store'
                />
                <ProjectsPane
                    description='Multiplayer tabletop RPG game with React on frontend, NodeJS on backend and with Socket.io for realtime communication.'
                    imageUrl='/boss-monster/boss-tiles-16-9.png'
                    title='Tabletop RPG'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/boss-monster-web'
                />
            </div>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'</personal projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'<study related projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <ProjectsPane
                    description='Chess app made from scratch in C++ with Qt for GUI. Final project for OOP course.'
                    imageUrl='/chess/chess-tiles-16-9.png'
                    title='Chess in C++'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/chess-cpp'
                />
                <ProjectsPane
                    description='Flashcards app made from scratch in Python with PyQt for GUI.'
                    imageUrl='/flashcards/flashcards-tiles-16-9.png'
                    title='Flashcards in Python'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/projekt-studia-flashcards'
                />
                <ProjectsPane
                    description='App made to help visually impaired people with daily activities by scanning NFC tags labeled to objects.'
                    imageUrl='/pzps/pzps-tiles-16-9.png'
                    title='Mobile app'
                    overlayText='See code'
                    overlayIcon={<BsCodeSlash />}
                    overlayLink='https://github.com/xDepcio/native-app-blind'
                />
            </div>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'</study related projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag reveal"}>{'</projects'}<span>{'>'}</span></p>
        </div>
    )
}
