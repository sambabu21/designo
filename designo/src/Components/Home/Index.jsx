import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import Qualities from "./Qualities";
import { useEffect } from "react"


export default function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="flex flex-col justify-center mb-[400px]">
            <Hero />
            <FeatureSection />
            <Qualities />
        </div>
    )
}
