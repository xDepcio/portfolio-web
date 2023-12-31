'use client'
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function FadeAnimationHandle() {
    const pathname = usePathname()

    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        const filteredReveals = Array.from(reveals).filter(ele => !ele.classList.contains('active'))
        let initalDelay = 0

        for (let i = 0; i < filteredReveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = filteredReveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => filteredReveals[i].classList.add("active"), initalDelay);
                initalDelay += 150
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", reveal);
        reveal()

        return () => {
            window.removeEventListener("scroll", reveal)
        };
    }, [])

    useEffect(() => {
        reveal()
    }, [pathname])

    return (
        <></>
    )
}
