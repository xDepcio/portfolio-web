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
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
                />
                <ProjectsPane
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
                />
                <ProjectsPane
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
                />
            </div>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'</personal projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner reveal"}>{'<study related projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <ProjectsPane
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
                />
                <ProjectsPane
                    description='Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.'
                    imageUrl='/mc-server-5.png'
                    title='Game server webpage'
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
