import Image from 'next/image'
import './ProjectsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramNext, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import SingleFullProject from './SingleFullProject'
import { SiNextdotjs, SiSequelize, SiExpress, SiSocketdotio, SiGitlab, SiQt, SiCplusplus, SiVisualstudio, SiPython, SiC, SiJavascript, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { BsCpu, BsCpuFill, BsGithub, BsStripe } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiPhone, BiTestTube } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { LuConstruction } from 'react-icons/lu'
import { TbBrandReactNative, TbBugOff } from 'react-icons/tb'
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
                        repoLink='https://github.com/xDepcio/mc-website-full'
                        title='Minecraft server site'
                        desc='Website template for Minecraft game server. Sequalize is used as an ORM to store players data and relations between them. Player can buy items which are assigned to a provided nickname from the shop implemented using Stripe API. Site is mostly finished, but is missing RWD which is due to my lost of interest in this project.'
                        img='/mc/mc-server-tiles-16-9-v2.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript key={1} className="text-yellow-400" />],
                            ['React', <BiLogoReact key={2} className="text-blue-400" />],
                            ['NodeJS', <BiLogoNodejs key={3} className="text-green-500" />],
                            ['Sequelize', <SiSequelize key={4} className="text-blue-400" />],
                            ['Express', <SiExpress key={5} />],
                            ['Stripe API', <BsStripe key={6} />]
                        ]}
                        missingList={[
                            ['RWD', <HiOutlineDeviceMobile key={1} />],
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio/portfolio-web'
                        title='Personal portfolio site'
                        desc='Personal portfolio site made with NextJS 13 app router, TypeScript and TailwindCSS. Website utilizes React server components to improve SEO and performance and is also fully responsive.'
                        img='/portfolio/portfolio-tiles-16-9.png'
                        inList={[
                            ['TypeScript', <SiTypescript key={1} />],
                            ['React', <BiLogoReact key={2} className="text-blue-400" />],
                            ['NextJS', <SiNextdotjs key={3} />],
                            ['TailwindCSS', <SiTailwindcss key={3} />],
                        ]}
                        missingList={[
                            // ['RWD', <HiOutlineDeviceMobile key={1} />],
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio/eccomerce_store'
                        title='Eccomerce site'
                        desc="This is an eCommerce website template, featuring a user authentication system built from scratch. The more sophisticated back-end is powered by Express and Sequelize. The site facilitates product browsing with filtering based on product specifications. Users are able to leave reviews, view their order history, add shipping addresses, and rate other users' reviews. The payment system is implemented using the Stripe API. Although the site is still a work-in-progress with some existing bugs and missing features, the scope of this project turned out to be quite extensive. Unfortunately, the scale was a bit too ambitious, leading to a decline in my motivation to see it through to completion."
                        img='/ecommerce/ecc-tiles-16-9-v2.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript key={1} />],
                            ['React', <BiLogoReact key={1} />],
                            ['NodeJS', <BiLogoNodejs key={1} />],
                            ['Sequelize', <SiSequelize key={1} />],
                            ['Express', <SiExpress key={1} />],
                            ['Stripe API', <BsStripe key={1} />]
                        ]}
                        missingList={[
                            ['Some RWD', <HiOutlineDeviceMobile key={1} />],
                            ['Features', <LuConstruction key={1} />],
                            ['Bugfixing', <TbBugOff key={1} />],
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio/boss-monster-web'
                        title='Tabletop RPG'
                        desc={`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital platform. The project leverages the power of React for the front-end, and brings it online through the use of NodeJS, Express and Socket.io. The site enables players to create a room and play with their friends. The inherently complex nature and spontaneous style of the game make it a challenging task to adapt it into a video game. However, the main foundations have already been laid; what remains is to add the remaining cards, a task made simpler due to the already implemented systems. Out of all the projects I've undertaken outside of university, this has been the most enjoyable to work on. The challenge of implementing an entire system for a tabletop game, including its asynchronous rules, has been truly rewarding. If you're interested in contributing to the completion of this project and need my assistance, please don't hesitate to reach out. I'd be more than happy to help you!`}
                        img='/boss-monster/boss-tiles-16-9.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript key={1} />],
                            ['React', <BiLogoReact key={1} />],
                            ['NodeJS', <BiLogoNodejs key={1} />],
                            ['Express', <SiExpress key={1} />],
                            ['Socket.io', <SiSocketdotio key={1} />]
                        ]}
                        missingList={[
                            ['Content', <MdContentCopy key={1} />],
                            ['Better tests', <BiTestTube key={1} />]
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
                        repoLink='https://github.com/xDepcio/chess-cpp'
                        title='C++ Chess app'
                        desc={`Chess desktop app made from scratch in C++ with Qt for GUI. Final project for OOP course. It features saving and loading a game, skins system and allows to interactivly revert to any move during a game. Moreover, it enables users to play against another player or compete with an computer, implemented via the Stockfish engine.`}
                        img='/chess/chess-tiles-16-9.png'
                        inList={[
                            ['C++', <SiCplusplus key={1} />],
                            ['Qt', <SiQt key={1} />],
                            ['Visual Studio 2022', <SiVisualstudio key={1} />],
                        ]}
                        missingList={[
                            // ['Nothing 25/25 pts. for this bad boy', <PiCatFill key={1} />],
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio/projekt-studia-flashcards'
                        title='Python flashcards app'
                        desc={`Flashcards desktop app, made to help with learning of foreign languages. It features the ability to add, delete, import, export and categorize flashcards, each with customizable priority levels. To test your overall knowledge, the application is equipped with built-in examinations. On top of that application features thorough statistics of user's progress.`}
                        img='/flashcards/flashcards-tiles-16-9.png'
                        inList={[
                            ['Python', <SiPython key={1} />],
                            ['PyQt', <SiQt key={1} />],
                        ]}
                        missingList={[
                            // ['Content', <MdContentCopy key={1} />],
                            // ['Better tests', <BiTestTube key={1} />]
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio/native-app-blind'
                        title='Mobile app'
                        desc={`Mobile app on the theme "blind person at home". The app is made to help visually impaired people with daily activities by scanning NFC tags labeled to objects. Each tag stores unique data which might be found useful for the user. E.g. medicine expiration date, or composition of the product.`}
                        img='/pzps/pzps-tiles-16-9.png'
                        inList={[
                            ['JavaScript', <SiJavascript key={1} />],
                            ['React native', <TbBrandReactNative key={1} />],
                            ['NodeJS', <BiLogoNodejs key={1} />],
                            ['Express', <SiExpress key={1} />],
                            ['Sequelize', <SiSequelize key={1} />],
                        ]}
                        missingList={[
                            // ['Content', <MdContentCopy key={1} />],
                            // ['Better tests', <BiTestTube key={1} />]
                        ]}
                    />
                    <SingleFullProject
                        repoLink='https://github.com/xDepcio'
                        title='Assembly projects'
                        desc={`Assembly projects made for Computer Architecture course. First project is convolution filter implemented in RISC-V assembly and second is hybrid x86 assembly and C program implementing interactive image twirl effect, with Allegro 5 library for GUI. Their scale is not as big as the previous ones, but since they were one of the most interesting projects I've done, I decided to include them here.`}
                        img='/arko/arko-tiles-16-9.png'
                        inList={[
                            ['C', <SiC key={1} />],
                            ['Allegro 5', <TfiVector key={1} />],
                            ['x86', <BsCpuFill key={1} />],
                            ['RISC-V', <BsCpu key={1} />],
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
