import Image from 'next/image'
import './ProjectsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramNext, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import SingleFullProject from './SingleFullProject'
import { SiNextdotjs, SiSequelize, SiExpress } from 'react-icons/si'
import { BsStripe } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiPhone } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'

export default function ProjectsPage() {
    return (
        <section className='projects-page-wrapper'>
            <div className='projects-page-inner-wrapper'>
                <h3 className='projects-page-header reveal'>Personal projects</h3>
                <div className="projects-page-projects">
                    <SingleFullProject
                        desc='dasdsa'
                        title='Minecraft server webpage'
                        img='/mc-server-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript className="text-yellow-400" />],
                            ['React', <BiLogoReact className="text-blue-400" />],
                            ['NodeJS', <BiLogoNodejs className="text-green-500" />],
                            ['Sequelize', <SiSequelize className="text-blue-400" />],
                            ['Express', <SiExpress />],
                            ['Stripe API', <BsStripe />]
                        ]}
                        missingList={[
                            ['RWD', <HiOutlineDeviceMobile />],
                        ]}
                    />
                    <SingleFullProject
                        desc='dasdsa'
                        title='Minecraft server webpage'
                        img='/mc-server-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript />],
                            ['React', <BiLogoReact />],
                            ['NodeJS', <BiLogoNodejs />],
                            ['Sequelize', <SiSequelize />],
                            ['Express', <SiExpress />],
                            ['Stripe API', <BsStripe />]
                        ]}
                        missingList={[
                            ['RWD', <HiOutlineDeviceMobile />],
                        ]}
                    />
                    <SingleFullProject
                        desc='dasdsa'
                        title='Minecraft server webpage'
                        img='/mc-server-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript />],
                            ['React', <BiLogoReact />],
                            ['NodeJS', <BiLogoNodejs />],
                            ['Sequelize', <SiSequelize />],
                            ['Express', <SiExpress />],
                            ['Stripe API', <BsStripe />]
                        ]}
                        missingList={[
                            ['RWD', <HiOutlineDeviceMobile />],
                        ]}
                    />
                </div>
                <h3 className='projects-page-header'>Projects for university</h3>
                <div className="project-page-projects">

                </div>

            </div>
        </section>
    )
}
