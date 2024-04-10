import Banner from "./Banner";
import OtherLinks from "./OtherLinks";
import ProjectList from "./ProjectList";
import { useEffect } from "react"


export default function GraphicDesign(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div className=" mb-[400px]">
            <Banner />
            <ProjectList />
            <OtherLinks />
        </div>
    )
}
