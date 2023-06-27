import Image from 'next/image'
import './Projects.css'
import { robotoMono } from './fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, faBook } from '@fortawesome/free-solid-svg-icons'

export const revalidate = 1

export default function Projects() {
    return (
        <div className="projects-wrapper">
            <p className={robotoMono.className + " projects-tag"}>{'<projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner"}>{'<personal projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
            </div>
            <p className={robotoMono.className + " projects-tag inner"}>{'</personal projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag inner"}>{'<study related projects'}<span>{'>'}</span></p>
            <div className='projects-holder'>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
                <div className='single-project'>
                    <div className='single-project-images'>
                        <Image
                            alt='project-1'
                            src={'/mc-server-5.png'}
                            width={520}
                            height={220}
                            className='img-1 w-full'
                        />

                    </div>
                    <div className='project-hero flex flex-row justify-between items-center'>
                        <h3>Game servesr webpage</h3>
                        <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                    </div>
                    <div className='single-project-text'>
                        <p className='project-desc'>Minecraft server webiste with React on frontend, NodeJS for backend and with Sequalize for Database.</p>
                    </div>
                </div>
            </div>
            <p className={robotoMono.className + " projects-tag inner"}>{'</study related projects'}<span>{'>'}</span></p>
            <p className={robotoMono.className + " projects-tag"}>{'</projects'}<span>{'>'}</span></p>
        </div>
    )
}
