import { faAnchor, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import './ProjectsPane.css'
import { ReactNode } from "react";
import Link from "next/link";

export default function ProjectsPane({ imageUrl, title, description, overlayText, overlayIcon, overlayLink }:
    { imageUrl: string, title: string, description: string, overlayText?: string, overlayIcon?: ReactNode, overlayLink?: string }) {
    return (
        <div className='single-project reveal'>
            <div className='single-project-images'>
                {overlayText && (
                    <Link href={overlayLink!} target="_blank">
                        <div className="project-visible-overlay">
                            {overlayIcon!}
                            {/* <FontAwesomeIcon className="max-w-[1.2rem]" icon={faAnchor} /> */}
                            <p>{overlayText}</p>
                        </div>
                    </Link>
                )}
                <Image
                    alt='project-1'
                    src={imageUrl}
                    width={520}
                    height={220}
                    className='img-1 w-full'
                />
            </div>
            <div className='project-hero flex flex-row justify-between items-center'>
                <h3>{title}</h3>
                <Link href={'/projects'}>
                    <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
                </Link>
            </div>
            <div className='single-project-text'>
                <p className='project-desc'>{description}</p>
            </div>
        </div>
    )
}
