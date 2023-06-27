import './Projects.css'
import { robotoMono } from './fonts'

export default function Projects() {
    return (
        <div className="projects-wrapper">
            <p className={robotoMono.className + " projects-tag"}>{'<projects>'}</p>
            <p className={robotoMono.className + " projects-tag"}>{'<personal projects>'}</p>
            <div>
                <div className='projects-holder'>
                    <div className='single-project-wrapper'></div>
                </div>
            </div>
            <p className={robotoMono.className + " projects-tag"}>{'</personal projects>'}</p>
            <p className={robotoMono.className + " projects-tag"}>{'<study related projects>'}</p>
            <div>
                <div>

                </div>
            </div>
            <p className={robotoMono.className + " projects-tag"}>{'</study related projects>'}</p>
            <p className={robotoMono.className + " projects-tag"}>{'</projects>'}</p>
        </div>
    )
}
