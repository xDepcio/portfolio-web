import Blobs from "@/components/Blobs";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            <Blobs />
            <Hero />
            <Projects />
        </div>
    )
}
