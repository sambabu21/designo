import Banner from "./Banner";
import OtherLinks from "./OtherLinks";
import ProjectList from "./ProjectList";

export default function AppDesign(){
    return(
        <div className=" mb-[400px]">
            <Banner />
            <ProjectList />
            <OtherLinks />
        </div>
    )
}