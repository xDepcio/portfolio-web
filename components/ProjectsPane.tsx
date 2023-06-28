import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import './ProjectsPane.css'

export default function ProjectsPane({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) {
    return (
        <div className='single-project'>
            <div className='single-project-images'>
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
                <p className='flex'><FontAwesomeIcon className='max-w-[15px]' icon={faBook} />read more</p>
            </div>
            <div className='single-project-text'>
                <p className='project-desc'>{description}</p>
            </div>
        </div>
    )
}
