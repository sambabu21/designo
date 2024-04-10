import Locations from "../Company/Locations";
import ContactForm from "./ContactForm";

export default function Contact(){
    return(
        <div className="mb-[400px]">
            <ContactForm />
            <Locations />
        </div>
    )
}