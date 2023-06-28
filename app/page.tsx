import Blobs from "@/components/Blobs";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Blobs />
            <div className='flex flex-col items-center'>
                <Hero />
                <Projects />
            </div>
        </>
    )
}
