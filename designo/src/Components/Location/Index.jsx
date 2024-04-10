import Content from "./Content";
import { useEffect } from "react"


export default function Locations(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className=" mb-[400px]">
            <Content />
        </div>
    )
}
