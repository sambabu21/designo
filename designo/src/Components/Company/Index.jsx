import Banner from "./Banner";
import Content from "./Content";
import FooterContent from "./FooterContent";
import Locations from "./Locations";
import { useEffect } from "react"


export default function AboutUs(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div className=" mb-[400px]">
            <Banner />
            <Content />
            <Locations />
            <FooterContent />
        </div>
    )
}
