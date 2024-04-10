import Locations from "../Company/Locations";
import ContactForm from "./ContactForm";
import { useEffect } from "react"


export default function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div className="mb-[400px]">
            <ContactForm />
            <Locations />
        </div>
    )
}
