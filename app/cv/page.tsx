import { BiArrowToRight, BiDownload, BiSolidCity } from "react-icons/bi";
import { LuGitlab, LuSchool } from "react-icons/lu";
import { SiCplusplus, SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiQt, SiReact, SiSequelize, SiTypescript } from "react-icons/si";
import { TbGps } from "react-icons/tb";
import AbsoluteBorders from "@/components/AbsoluteBorders";
import Image from "next/image";
import { BsDownload, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineDocument } from "react-icons/hi";
import './CvPage.css'

export default function AboutPage() {
    return (
        <main className="about-wrapper">
            <section className="reveal flex gap-3 items-center justify-center p-4">
                <Image
                    className="reveal aspect-square flex-grow rounded-full"
                    src={'/personal/me-img-cropped.png'}
                    alt="profile picture"
                    width={100}
                    height={100}
                />
                <div className="reveal flex flex-col">
                    <p>{`Hi, I'm`}</p>
                    <h2 className="about-name">Aleksander Drwal</h2>
                </div>
            </section>
            <section className="reveal about-info-section">
                <div className="info-blob-1" />
                <div className="info-blob-2" />
                <div className="cv-about cv-top flex items-center gap-1 place-self-end self-end mt-auto">
                    <Link className="flex items-center gap-1" href={'/api/cv'}>
                        <p>Curriculum Vitae</p>
                        <HiOutlineDocument />
                    </Link>
                </div>
                <div className="reveal">
                    <h4>Age</h4>
                    <p>20</p>
                </div>
                <div className="reveal about-location">
                    <div>
                        <TbGps />
                        <h4>Location</h4>
                    </div>
                    <div>
                        <BiSolidCity />
                        <p className="whitespace-nowrap">Warsaw - Poland</p>
                    </div>
                </div>
                <div className="reveal about-edu">
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
                </div>
            </section>
            <section className="reveal skills-section">
                <div className="skills-blob-1" />
                <div className="skills-blob-2" />
                <h3>Education</h3>
                <div className="about-edu-schools">
                    <div className="edu-progress-wrapper">
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
                    <div className="edu-cards">
                        <div className="edu-stage-wrapper">
                            <LuSchool className="school-icon" />
                            <div>
                                <h5>High School</h5>
                                <p className="text-[0.8rem] text-end whitespace-nowrap">2019 - 2022</p>
                            </div>
                        </div>
                        {/* <BiArrowToRight className="edu-arrow" /> */}
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
                </div>
                <h3 className="reveal">Skills</h3>
                <ul>
                    <li className="reveal">
                        <p>JavaScript</p>
                        <SiJavascript />
                    </li>
                    <li className="reveal">
                        <p>Qt</p>
                        <SiQt />
                    </li>
                    <li className="reveal">
                        <p>React</p>
                        <SiReact />
                    </li>
                    <li className="reveal">
                        <p>Next.js</p>
                        <SiNextdotjs />
                    </li>
                    <li className="reveal">
                        <p>Prisma</p>
                        <SiPrisma />
                    </li>
                    <li className="reveal">
                        <p>Express</p>
                        <SiExpress />
                    </li>
                    <li className="reveal">
                        <p>Sequelize</p>
                        <SiSequelize />
                    </li>
                    <li className="reveal">
                        <p>C++</p>
                        <SiCplusplus />
                    </li>
                    <li className="reveal">
                        <p>Node.js</p>
                        <SiNodedotjs />
                    </li>
                    <li className="reveal">
                        <p>Python</p>
                        <SiPython />
                    </li>
                    <li className="reveal">
                        <p>TypeScript</p>
                        <SiTypescript />
                    </li>
                </ul>
            </section>
            <section className="about-desc reveal">
                <div className="desc-blob-1" />
                <div className="desc-blob-2" />
                <div className="reveal about-desc-header-wrapper flex justify-center gap-3">
                    <Link href={'https://github.com/xDepcio'} className="flex items-center gap-1 text-[0.8rem]">
                        <BsGithub />
                        <p>See Github</p>
                    </Link>
                    <h3 className="about-desc-proj-head">About me</h3>
                    <Link href={'https://gitlab-stud.elka.pw.edu.pl/adrwal'} className="flex items-center gap-1 text-[0.8rem]">
                        <LuGitlab />
                        <p>See Gitlab</p>
                    </Link>
                </div>
                <div className="about-me-desc-wrapper">
                    {/* <h3>Studies</h3> */}
                    <p className="reveal">
                        {`In October 2022, I started studying Computer Science at the Warsaw University of Technology.
                        As of the time of writing this, I have successfully completed my second semester and I'm
                        scheduled to start my third semester in October 2023.`}
                    </p>
                    <p className="reveal">
                        {`So far, at university, I've learned core programming paradigms,
                        software design patterns, low-level programming, data structures, algorithms, and a whole bunch more fascinating stuff.
                        But what really gets my gears turning is web development, something I've been teaching myself outside of school.
                        I'm pretty hooked on it, mainly due to the fact that it allows me to create, and ship most of the ideas I have.`}
                    </p>
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
