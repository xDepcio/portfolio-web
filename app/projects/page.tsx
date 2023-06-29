import Image from 'next/image'
import './ProjectsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramNext, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import SingleFullProject from './SingleFullProject'
import { SiNextdotjs, SiSequelize, SiExpress, SiSocketdotio } from 'react-icons/si'
import { BsStripe } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiPhone, BiTestTube } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { LuConstruction } from 'react-icons/lu'
import { TbBugOff } from 'react-icons/tb'

export default function ProjectsPage() {
    return (
        <section className='projects-page-wrapper'>
            <div className='projects-page-inner-wrapper'>
                <h3 className='projects-page-header reveal'>Personal projects</h3>
                <div className="projects-page-projects">
                    <SingleFullProject
                        title='Minecraft server webpage'
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
                        title='Eccomerce website'
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
                        desc='dasdsa'
                        title='Minecraft server webpage'
                        img='/boss-monster/boss-tiles.png'
                        inList={[
                            ['JavaScript', <BiLogoJavascript />],
                            ['React', <BiLogoReact />],
                            ['NodeJS', <BiLogoNodejs />],
                            ['Express', <SiExpress />],
                            ['Socket.io', <SiSocketdotio />]
                        ]}
                        missingList={[
                            ['Features', <LuConstruction />],
                            ['Better tests', <BiTestTube />]
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
