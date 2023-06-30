import { BiArrowToRight, BiDownload, BiSolidCity } from "react-icons/bi";
import { LuGitlab, LuSchool } from "react-icons/lu";
import { SiCplusplus, SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiQt, SiReact, SiSequelize, SiTypescript } from "react-icons/si";
import { TbGps } from "react-icons/tb";
import './AboutPage.css'
import AbsoluteBorders from "@/components/AbsoluteBorders";
import Image from "next/image";
import { BsDownload, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineDocument } from "react-icons/hi";

export default function AboutPage() {
    return (
        <main className="about-wrapper">
            <section className="reveal flex gap-3 items-center justify-center p-4">
                <Image
                    className="reveal aspect-square flex-grow rounded-full"
                    src={'/personal/profile-temp-sqr.jpg'}
                    alt="profile picture"
                    width={100}
                    height={100}
                />
                <div className="reveal flex flex-col">
                    <p>Hi, I'm</p>
                    <h2 className="about-name">Aleksander Drwal</h2>
                </div>
                {/* <AbsoluteBorders side="bottom-left" />
                <AbsoluteBorders side="bottom-right" />
                <AbsoluteBorders side="top-left" />
                <AbsoluteBorders side="top-right" /> */}
            </section>
            <section className="reveal about-info-section">
                {/* <div className="info-blobs"> */}
                <div className="info-blob-1" />
                <div className="info-blob-2" />
                {/* </div> */}
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
                        <p>Warsaw - Poland</p>
                    </div>
                </div>
                <div className="reveal about-edu">
                    <h4>Education</h4>
                    <div className="about-edu-schools">
                        <div className="edu-stage-wrapper">
                            <LuSchool className="school-icon" />
                            <div>
                                <h5>High School</h5>
                                <p className="text-[0.8rem] text-end">2019 - 2022</p>
                            </div>
                        </div>
                        <BiArrowToRight className="edu-arrow" />
                        <div className="edu-stage-wrapper">
                            <LuSchool className="uni-icon" />
                            <div>
                                <h5>Warsaw University of Technology - EITI faculty</h5>
                                <div className="uni-degree">
                                    <p>Computer Science</p>
                                    <p>2022 - present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reveal skills-section">
                <div className="skills-blob-1" />
                <div className="skills-blob-2" />
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
                <div className="about-desc-header-wrapper flex justify-center gap-3">
                    <Link href={'https://github.com/xDepcio'} className="flex items-center gap-1 text-[0.8rem]">
                        <BsGithub />
                        <p>See Github</p>
                    </Link>
                    <h3 className="reveal about-desc-proj-head">Recent projects</h3>
                    <Link href={'https://gitlab-stud.elka.pw.edu.pl/adrwal'} className="flex items-center gap-1 text-[0.8rem]">
                        <LuGitlab />
                        <p>See Gitlab</p>
                    </Link>
                </div>
                <ul className="about-projects-wrapper">
                    <li className="reveal">Game server site</li>
                    <li className="reveal">Eccomerce site</li>
                    <li className="reveal">Tabletop RPG</li>
                    <li className="reveal">Personal portfolio site</li>
                    <li className="reveal">Chess app</li>
                    <li className="reveal">Flashcards app</li>
                    <li className="reveal">Mobile app for visually impaired</li>
                </ul>
                <div className="flex items-center gap-1 underline place-self-end self-end mt-auto">
                    <p>Curriculum Vitae</p>
                    <HiOutlineDocument />
                </div>
                {/* <AbsoluteBorders side="bottom-right" /> */}
                {/* <AbsoluteBorders side="top-left" /> */}
            </section>
        </main>
    )
}
