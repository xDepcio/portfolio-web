import { BiArrowToRight, BiDownload, BiEnvelope, BiSolidCity } from "react-icons/bi";
import { LuContact, LuGitlab, LuLinkedin, LuSchool, LuSchool2 } from "react-icons/lu";
import { SiCplusplus, SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiQt, SiReact, SiSequelize, SiTypescript } from "react-icons/si";
import { GiPoland } from "react-icons/gi";
import { LiaFlagUsaSolid } from 'react-icons/lia'
import { TbGps, TbWorldWww } from "react-icons/tb";
import AbsoluteBorders from "@/components/AbsoluteBorders";
import Image from "next/image";
import { BsDownload, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineDocument } from "react-icons/hi";
import './CvPage.css'
import { MdLanguage } from "react-icons/md";
import { robotoMono } from '../../components/fonts'

export default function AboutPage() {
    return (
        <main className="about-wrapper">
            <section className=" flex gap-3 items-center p-4 w-[60%] m-auto">
                <Image
                    className=" aspect-square flex-grow rounded-full"
                    src={'/personal/me-img-cropped.png'}
                    alt="profile picture"
                    width={600}
                    height={600}
                />
                {/* <div className=" flex flex-col">
                    <p>{`Hi, I'm`}</p>
                    <h2 className="about-name">Aleksander Drwal</h2>
                </div> */}
            </section>
            <section className=" about-info-section">
                {/* <div className="info-blob-1" /> */}
                {/* <div className="info-blob-2" /> */}
                <div className=" olek-div flex flex-col">
                    <p className="olek-hi">{`Hi, my name is`}</p>
                    <h2 className="about-name">Aleksander Drwal</h2>
                    <p className={robotoMono.className + " mono-olek"}>{`>comp-sci student`}</p>
                    <p className={robotoMono.className + " mono-olek"}>{`>web developer`}</p>
                </div>
                {/* <div className="">
                    <h4>Age</h4>
                    <p>20</p>
                </div>
                <div className=" about-location">
                    <div>
                        <TbGps />
                        <h4>Location</h4>
                    </div>
                    <div>
                        <BiSolidCity />
                        <p className="whitespace-nowrap">Warsaw - Poland</p>
                    </div>
                </div> */}
                {/* <div className=" about-edu">
                    <h4>Education</h4>
                    <div className="about-edu-schools">
                        <div className="edu-stage-wrapper">
                            <LuSchool className="school-icon" />
                            <div>
                                <h5>High School</h5>
                                <p className="text-[0.8rem] text-end whitespace-nowrap">2019 - 2022</p>
                            </div>
                        </div>
                        <BiArrowToRight className="edu-arrow" />
                        <div className="edu-stage-wrapper">
                            <LuSchool className="uni-icon" />
                            <div>
                                <h5>Warsaw University of Technology</h5>
                                <div className="uni-degree">
                                    <p className="whitespace-nowrap">Computer Science</p>
                                    <p className="whitespace-nowrap">2022 - present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <section className=" skills-section">
                <div className="blob skills-blob-1" />
                <div className="blob skills-blob-2" />
                {/* <h4 className="mt-4">
                    Location
                    <TbGps />
                </h4>
                <div className="flex items-center gap-1 mt-2">
                    <BiSolidCity />
                    <p>Warsaw - Poland</p>
                </div>
                <h3 className="mt-10">
                    Languages
                    <MdLanguage />
                </h3>
                <div className="mt-2">
                    <div className="flex items-center gap-2">
                        <GiPoland />
                        <p>Polish - Native</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LiaFlagUsaSolid />
                        <p>English - C1</p>
                    </div>
                </div> */}
                <h3 className="">
                    Contact
                    <LuContact />
                </h3>
                <div className="cv-contancts mt-2">
                    <Link href={'/'} className="flex gap-2 items-center">
                        <TbWorldWww />
                        <p>Website - portfolio.adrwal.pl</p>
                    </Link>
                    <Link href={'/'} className="flex gap-2 items-center">
                        <BsGithub />
                        <p>Github - xDepcio</p>
                    </Link>
                    <Link href={'/'} className="flex gap-2 items-center">
                        <LuGitlab />
                        <p>Gitlab - adrwal</p>
                    </Link>
                    <Link href={'/'} className="flex gap-2 items-center">
                        <LuLinkedin />
                        <p>LinkedIn - Aleksander Drwal</p>
                    </Link>
                    <Link href={'/'} className="flex gap-2 items-center">
                        <BiEnvelope />
                        <p>Email - olek.drwal@gmail.com</p>
                    </Link>
                </div>
                <h3 className="mt-10">
                    Education
                    <LuSchool />
                </h3>
                <div className="about-edu-schools flex gap-4 justify-center">
                    <div className="edu-progress-wrapper text-[0.8rem]">
                        <div className="edu-prog-1">
                            <p>2019</p>
                            <div className="edu-prog-1-dot" />
                        </div>
                        <div className="edu-prog-2">
                            <p>2022</p>
                            <div className="edu-prog-2-dot" />
                        </div>
                        <div className="edu-prog-3">
                            <p>now</p>
                            <div className="edu-prog-3-dot" />
                        </div>
                    </div>
                    <div className="edu-cards flex gap-4 flex-col">
                        <div className="edu-stage-wrapper">
                            <LuSchool className="school-icon" />
                            <div>
                                <h5>High School</h5>
                                <p className="text-[0.8rem] text-end whitespace-nowrap">Math-Physics</p>
                            </div>
                        </div>
                        {/* <BiArrowToRight className="edu-arrow" /> */}
                        <div className="edu-stage-wrapper">
                            <LuSchool2 className="uni-icon" />
                            <div>
                                <h5>Warsaw University of Technology</h5>
                                <div className="uni-degree">
                                    <p className="whitespace-nowrap">Computer Science</p>
                                    {/* <p className="whitespace-nowrap">2022 - present</p> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <h3 className=" mt-10">Skills</h3>
                <ul>
                    <li className="">
                        <p>JavaScript</p>
                        <SiJavascript />
                    </li>
                    <li className="">
                        <p>Qt</p>
                        <SiQt />
                    </li>
                    <li className="">
                        <p>React</p>
                        <SiReact />
                    </li>
                    <li className="">
                        <p>Next.js</p>
                        <SiNextdotjs />
                    </li>
                    <li className="">
                        <p>Prisma</p>
                        <SiPrisma />
                    </li>
                    <li className="">
                        <p>Express</p>
                        <SiExpress />
                    </li>
                    <li className="">
                        <p>Sequelize</p>
                        <SiSequelize />
                    </li>
                    <li className="">
                        <p>C++</p>
                        <SiCplusplus />
                    </li>
                    <li className="">
                        <p>Node.js</p>
                        <SiNodedotjs />
                    </li>
                    <li className="">
                        <p>Python</p>
                        <SiPython />
                    </li>
                    <li className="">
                        <p>TypeScript</p>
                        <SiTypescript />
                    </li>
                </ul>
                <h3 className="mt-10">
                    Location
                    <TbGps />
                </h3>
                <div className="flex items-center gap-1 mt-2">
                    <BiSolidCity />
                    <p>Warsaw - Poland</p>
                </div>
                <h3 className="mt-10">
                    Languages
                    <MdLanguage />
                </h3>
                <div className="mt-2 pb-10">
                    <div className="flex items-center gap-2">
                        <GiPoland />
                        <p>Polish - Native</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LiaFlagUsaSolid />
                        <p>English - C1</p>
                    </div>
                </div>
            </section>
            <section className="about-desc ">
                <div className="desc-blob-1" />
                <div className="desc-blob-2" />
                <div className="desc-blob-3" />
                <div className="desc-blob-4" />
                <div className=" about-desc-header-wrapper flex justify-center gap-3">
                    <Link href={'https://github.com/xDepcio'} className="flex items-center gap-1 text-[0.8rem]">
                        <BsGithub />
                        <p>See Github</p>
                    </Link>
                    <h3 className="about-desc-proj-head">Recent projects</h3>
                    <Link href={'https://gitlab-stud.elka.pw.edu.pl/adrwal'} className="flex items-center gap-1 text-[0.8rem]">
                        <LuGitlab />
                        <p>See Gitlab</p>
                    </Link>
                </div>
                <div className="about-me-desc-wrapper">
                    {/* <h3>Studies</h3> */}
                    <div className="cv-single-project mb-8">
                        <h2 className="cv-header-per mb-4">Personal portfolio website</h2>
                        {/* <ul className="cv-single-techs">
                            <li className="">
                                <p>TypeScript</p>
                                <SiTypescript />
                            </li>
                            <li className="">
                                <p>React</p>
                                <SiReact />
                            </li>
                            <li className="">
                                <p>Next.js</p>
                                <SiNextdotjs />
                            </li>
                        </ul> */}
                        <div className="flex gap-4 items-start">
                            <p>{`Personal portfolio site made with NextJS 13 app router, TypeScript and TailwindCSS.
                                Website utilizes React server components to improve SEO and performance and is also fully
                                responsive.
                                `}
                            </p>
                            <Image className="rounded-[0.8rem]" alt="project-image" src={'/portfolio/portfolio-tiles-16-9.png'} width={350} height={100} />
                        </div>
                    </div>
                    <div className="cv-single-project mb-8">
                        <h2 className="boss-header mb-4">Multiplayer Tabletop RPG</h2>
                        {/* <ul className="cv-single-techs">
                            <li className="">
                                <p>TypeScript</p>
                                <SiTypescript />
                            </li>
                            <li className="">
                                <p>React</p>
                                <SiReact />
                            </li>
                            <li className="">
                                <p>Next.js</p>
                                <SiNextdotjs />
                            </li>
                        </ul> */}
                        <div className="flex gap-6 items-start">
                            <p>{`Recreation of my all time favourite tabletop RPG game "boss monsters" into a digital
                                platform. The site enables players to create a room
                                and play with their friends. The inherently complex nature and spontaneous style of the
                                game make it a challenging task to adapt it into a video game. However, the main
                                foundations have already been laid; what remains is to add the remaining cards, a task made
                                simpler due to the already implemented systems.
                                `}
                            </p>
                            <Image className="rounded-[0.8rem]" alt="project-image" src={'/boss-monster/boss-tiles-16-9-v2.png'} width={350} height={100} />
                        </div>
                    </div>
                    <div className="cv-single-project mb-8">
                        <h2 className="game-server mb-4">Game server website</h2>
                        {/* <ul className="cv-single-techs">
                            <li className="">
                                <p>TypeScript</p>
                                <SiTypescript />
                            </li>
                            <li className="">
                                <p>React</p>
                                <SiReact />
                            </li>
                            <li className="">
                                <p>Next.js</p>
                                <SiNextdotjs />
                            </li>
                        </ul> */}
                        <div className="flex gap-4 items-start">
                            <p>{`Website template for Minecraft game server. Sequalize is used as an ORM to store players
                                data and relations between them. Player can buy items which are assigned to a provided
                                nickname from the shop implemented using Stripe API. Site is mostly finished, but is missing
                                RWD which is due to my lost of interest in this project.
                                `}
                            </p>
                            <Image className="rounded-[0.8rem]" alt="project-image" src={'/mc/mc-server-tiles-16-9.png'} width={350} height={100} />
                        </div>
                    </div>
                </div>
                <div className="cv-about cv-bottom flex items-center gap-1 place-self-end self-end mt-auto">
                    <Link className="flex items-center gap-1" href={'/api/cv'}>
                        <p>Curriculum Vitae</p>
                        <HiOutlineDocument />
                    </Link>
                </div>
            </section>
        </main>
    )
}
