import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import './SingleFullProject.css'
import { BsCodeSlash } from 'react-icons/bs'
import { ReactNode } from "react";
import Link from "next/link";

export default function SingleFullProject({ title, desc, img, inList, missingList }:
    { title: string, desc: string, img: string, inList: [string, ReactNode][], missingList: [string, ReactNode][] }
) {
    return (
        <div className='projects-page-single-project reveal'>
            <Image src={img} alt='sdas' width={500} height={200} />
            <div className="big-project-header-wrapper">
                <h3 className="big-project-header leading-[100%]">{title}</h3>
                <Link className="code-project whitespace-nowrap" href={'/'}>
                    see code
                    <BsCodeSlash />
                </Link>
            </div>
            <p className="big-project-desc">{desc}</p>
            <h3 className="project-page-sub-header">Whats in?</h3>
            <ul className="first-ul-projects">
                {inList.map((item, index) => {
                    return (
                        <li key={index}>
                            <FontAwesomeIcon className="max-w-[0.8rem] text-green-400" icon={faPlus} />
                            <p>{item[0]}</p>
                            {item[1]}
                        </li>
                    )
                })}
            </ul>
            <h3 className="project-page-sub-header">Whats missing?</h3>
            <ul>
                {missingList.map((item, index) => {
                    return (
                        <li key={index}>
                            <FontAwesomeIcon className="max-w-[0.8rem] text-red-400" icon={faMinus} />
                            <p>{item[0]}</p>
                            {item[1]}
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}
