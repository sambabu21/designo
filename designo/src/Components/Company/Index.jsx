import Banner from "./Banner";
import Content from "./Content";
import FooterContent from "./FooterContent";
import Locations from "./Locations";

export default function AboutUs(){
    return(
        <div className=" mb-[400px]">
            <Banner />
            <Content />
            <Locations />
            <FooterContent />
        </div>
    )
}