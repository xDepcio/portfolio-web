import BioAnim from './BioAnim'
import './Hero.css'
import { robotoMono } from './fonts'

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <h3 className='hero-hello reveal'>Hi, my name is</h3>
            <h1 className='hero-name reveal'>Aleksander Drwal</h1>
            <BioAnim />
        </div>
    )
}
