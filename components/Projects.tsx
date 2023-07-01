import Image from 'next/image'
import './Projects.css'
import { robotoMono } from './fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, faBook } from '@fortawesome/free-solid-svg-icons'
import ProjectsPane from './ProjectsPane'

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
                />
                <ProjectsPane
                    description='Eccomerce site with React on frontend, NodeJS on backend with Sequalize for Database and with Stripe for payments.'
                    imageUrl='/ecommerce/ecc-tiles-16-9.png'
                    title='Ecommerce site'
                />
                <ProjectsPane
                    description='Multiplayer tabletop RPG game with React on frontend, NodeJS on backend and with Socket.io for realtime communication.'
                    imageUrl='/boss-monster/boss-tiles-16-9.png'
                    title='Tabletop RPG'
                />
            </div>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'</personal projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'<study related projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <ProjectsPane
                    description='Chess app made from scratch in C++ with Qt for GUI. Final project for OOP course.'
                    imageUrl='/chess/chess-tiles-16-9.png'
                    title='Chess in C++'
                />
                <ProjectsPane
                    description='Flashcards app made from scratch in Python with PyQt for GUI.'
                    imageUrl='/flashcards/flashcards-tiles-16-9.png'
                    title='Flashcards in Python'
                />
                <ProjectsPane
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
                />
            </div>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'</study related projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag reveal"}>{'</projects'}<span>{'>'}</span></p>
        </div>
    )
}
