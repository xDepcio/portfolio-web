import Image from 'next/image'
import './ProjectsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramNext, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import SingleFullProject from './SingleFullProject'
import { SiNextdotjs, SiSequelize, SiExpress, SiSocketdotio, SiGitlab, SiQt, SiCplusplus, SiVisualstudio, SiPython, SiC } from 'react-icons/si'
import { BsCpu, BsCpuFill, BsGithub, BsStripe } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiPhone, BiTestTube } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { LuConstruction } from 'react-icons/lu'
import { TbBugOff } from 'react-icons/tb'
import { MdContentCopy } from 'react-icons/md'
import { PiCatFill } from 'react-icons/pi'
import { TfiVector } from 'react-icons/tfi'
import Link from 'next/link'
import AbsoluteBorders from '@/components/AbsoluteBorders'

export default function ProjectsPage() {
    return (
        <section className='projects-page-wrapper'>
            <div className='projects-page-inner-wrapper'>
                <div className='flex items-baseline gap-3'>
                    <h3 className='projects-page-header reveal'>Personal projects</h3>
                    <Link className='reveal flex items-center justify-center gap-1 text-[#b1b1b1] text-[0.8rem]' href="https://github.com/xDepcio" target='_blank'>
                        <p className='whitespace-nowrap'>See all on Github</p>
                        <BsGithub />
                    </Link>
                </div>
                <div id='personal-projects' className="projects-page-projects">
                    <AbsoluteBorders side='top-right' />
                    <AbsoluteBorders side='bottom-right' />
                    <AbsoluteBorders side='bottom-left' />
                    <SingleFullProject
                        title='Minecraft server site'
                        desc='Website template for Minecraft game server. Sequalize is used as an ORM to store players data and relations between them. Player can buy items which are assigned to a provided nickname from the shop implemented using Stripe API. Site is mostly finished, but is missing RWD which is due to my lost of interest in this project.'
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
                        title='Eccomerce site'
                        desc="This is an eCommerce website template, featuring a user authentication system built from scratch. The more sophisticated back-end is powered by Express and Sequelize. The site facilitates product browsing with filtering based on product specifications. Users are able to leave reviews, view their order history, add shipping addresses, and rate other users' reviews. The payment system is implemented using the Stripe API. Although the site is still a work-in-progress with some existing bugs and missing features, the scope of this project turned out to be quite extensive. Unfortunately, the scale was a bit too ambitious, leading to a decline in my motivation to see it through to completion."
                        img='/ecommerce/ecc-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript />],
                            ['React', <BiLogoReact />],
                            ['NodeJS', <BiLogoNodejs />],
                            ['Sequelize', <SiSequelize />],
                            ['Express', <SiExpress />],
                            ['Stripe API', <BsStripe />]
                        ]}
                        missingList={[
                            ['Some RWD', <HiOutlineDeviceMobile />],
                            ['Features', <LuConstruction />],
                            ['Bugfixing', <TbBugOff />],
                        ]}
                    />
                    <SingleFullProject
                        title='Tabletop RPG'
                        desc={`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital platform. The project leverages the power of React for the front-end, and brings it online through the use of NodeJS, Express and Socket.io. The site enables players to create a room and play with their friends. The inherently complex nature and spontaneous style of the game make it a challenging task to adapt it into a video game. However, the main foundations have already been laid; what remains is to add the remaining cards, a task made simpler due to the already implemented systems. Out of all the projects I've undertaken outside of university, this has been the most enjoyable to work on. The challenge of implementing an entire system for a tabletop game, including its asynchronous rules, has been truly rewarding. If you're interested in contributing to the completion of this project and need my assistance, please don't hesitate to reach out. I'd be more than happy to help you!`}
                        img='/boss-monster/boss-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript />],
                            ['React', <BiLogoReact />],
                            ['NodeJS', <BiLogoNodejs />],
                            ['Express', <SiExpress />],
                            ['Socket.io', <SiSocketdotio />]
                        ]}
                        missingList={[
                            ['Content', <MdContentCopy />],
                            ['Better tests', <BiTestTube />]
                        ]}
                    />
                </div>
                <div className='flex items-baseline gap-3 mt-28'>
                    <h3 className='projects-page-header reveal'>Projects for university</h3>
                    <Link className='reveal flex items-center justify-center gap-1 text-[#b1b1b1] text-[0.8rem]' href="https://gitlab-stud.elka.pw.edu.pl/adrwal" target='_blank'>
                        <p className='whitespace-nowrap'>See all on Gitlab</p>
                        <SiGitlab />
                    </Link>
                </div>
                <div className="projects-page-projects mb-28">
                    <AbsoluteBorders side='top-right' />
                    <AbsoluteBorders side='bottom-right' />
                    <AbsoluteBorders side='bottom-left' />
                    <SingleFullProject
                        title='Tabletop RPG'
                        desc={`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital platform. The project leverages the power of React for the front-end, and brings it online through the use of NodeJS, Express and Socket.io. The site enables players to create a room and play with their friends. The inherently complex nature and spontaneous style of the game make it a challenging task to adapt it into a video game. However, the main foundations have already been laid; what remains is to add the remaining cards, a task made simpler due to the already implemented systems. Out of all the projects I've undertaken outside of university, this has been the most enjoyable to work on. The challenge of implementing an entire system for a tabletop game, including its asynchronous rules, has been truly rewarding. If you're interested in contributing to the completion of this project and need my assistance, please don't hesitate to reach out. I'd be more than happy to help you!`}
                        img='/boss-monster/boss-tiles.png'
                        inList={[
                            ['C++', <SiCplusplus />],
                            ['Qt', <SiQt />],
                            ['Visual Studio 2022', <SiVisualstudio />],
                        ]}
                        missingList={[
                            ['Nothing 25/25 pts. for this bad boy', <PiCatFill />],
                        ]}
                    />
                    <SingleFullProject
                        title='Tabletop RPG'
                        desc={`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital platform. The project leverages the power of React for the front-end, and brings it online through the use of NodeJS, Express and Socket.io. The site enables players to create a room and play with their friends. The inherently complex nature and spontaneous style of the game make it a challenging task to adapt it into a video game. However, the main foundations have already been laid; what remains is to add the remaining cards, a task made simpler due to the already implemented systems. Out of all the projects I've undertaken outside of university, this has been the most enjoyable to work on. The challenge of implementing an entire system for a tabletop game, including its asynchronous rules, has been truly rewarding. If you're interested in contributing to the completion of this project and need my assistance, please don't hesitate to reach out. I'd be more than happy to help you!`}
                        img='/boss-monster/boss-tiles.png'
                        inList={[
                            ['Python', <SiPython />],
                            ['PyQt', <SiQt />],
                        ]}
                        missingList={[
                            ['Content', <MdContentCopy />],
                            ['Better tests', <BiTestTube />]
                        ]}
                    />
                    <SingleFullProject
                        title='Tabletop RPG'
                        desc={`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital platform. The project leverages the power of React for the front-end, and brings it online through the use of NodeJS, Express and Socket.io. The site enables players to create a room and play with their friends. The inherently complex nature and spontaneous style of the game make it a challenging task to adapt it into a video game. However, the main foundations have already been laid; what remains is to add the remaining cards, a task made simpler due to the already implemented systems. Out of all the projects I've undertaken outside of university, this has been the most enjoyable to work on. The challenge of implementing an entire system for a tabletop game, including its asynchronous rules, has been truly rewarding. If you're interested in contributing to the completion of this project and need my assistance, please don't hesitate to reach out. I'd be more than happy to help you!`}
                        img='/boss-monster/boss-tiles.png'
                        inList={[
                            ['C', <SiC />],
                            ['Allegro 5', <TfiVector />],
                            ['x86', <BsCpuFill />],
                            ['RISC-V', <BsCpu />],
                        ]}
                        missingList={[
                            // ['Content', <MdContentCopy />],
                            // ['Better tests', <BiTestTube />]
                        ]}
                    />
                </div>

            </div>
        </section>
    )
}
