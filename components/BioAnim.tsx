'use client'
import { useEffect, useState } from 'react'
import './Hero.css'
import { robotoMono } from './fonts'

export default function BioAnim() {
    const texts: string[] = ['comp-sci student', 'web developer']
    const [selectedText, setSelectedText] = useState(texts[0])
    const [textIndex, setTextIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')

    function textCycle() {
        setTextIndex(prevTextIndex => {
            setSelectedText(texts[prevTextIndex])
            let charIndex = 0
            const typeInterval = setInterval(() => {
                setDisplayedText(texts[prevTextIndex].slice(0, charIndex))
                if (charIndex === texts[prevTextIndex].length) {
                    clearInterval(typeInterval)
                    setTimeout(() => {
                        const delInterval = setInterval(() => {
                            setDisplayedText(texts[prevTextIndex].slice(0, charIndex))
                            if (charIndex === 0) {
                                clearInterval(delInterval)
                            }
                            else {
                                charIndex--
                            }
                        }, 50)
                    }, 3000)
                }
                else {
                    charIndex++
                }
            }, 50)
            return (prevTextIndex + 1) % texts.length
        })
    }

    useEffect(() => {
        const flickInterval = setInterval(() => {
            if (document.getElementById('del-char')?.classList.contains('show')) {
                const ele = document.getElementById('del-char')
                ele?.classList.remove('show')
                ele ? ele.innerText = '' : null
            }
            else {
                const ele = document.getElementById('del-char')
                ele?.classList.add('show')
                ele ? ele.innerText = '.' : null

            }
        }, 600)

        textCycle()
        const textsCycleInterval = setInterval(textCycle, 7000)


        return () => {
            clearInterval(flickInterval)
            clearInterval(textsCycleInterval)
        }
    }, [])

    return (
        <p className={robotoMono.className + ' hero-bio'}>
            <span>{'>'}{displayedText}</span>
            <span id='del-char' className='post-bio show'>{''}</span>
        </p>
    )
}
