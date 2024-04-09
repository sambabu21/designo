import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import Qualities from "./Qualities";

export default function Home(){
    return (
        <div className="flex flex-col justify-center mb-[400px]">
            <Hero />
            <FeatureSection />
            <Qualities />
        </div>
    )
}