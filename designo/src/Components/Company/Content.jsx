import talentImgDes from "../../assets/about/desktop/image-world-class-talent.jpg"
import talentImgTab from "../../assets/about/tablet/image-world-class-talent.jpg"
import talentImgMob from "../../assets/about/mobile/image-world-class-talent.jpg"

export default function Content(){
    return (
        <div className="flex lg:flex-row flex-col justify-center items-center lg:w-[75vw] sm:w-[90vw] sm:my-40 mx-auto bg-[#FDF3F0]  sm:rounded-[15px] bg-talent">
            <div>
                <img src={talentImgDes} className="lg:rounded-l-[15px] hidden lg:block"/>
                <img src={talentImgTab} className="rounded-t-[15px] hidden sm:block lg:hidden"/>
                <img src={talentImgMob} className="sm:hidden"/>
            </div>
            <div className="sm:h-1/2 lg:w-[60%] flex flex-col justify-center items-center lg:items-start sm:px-10 lg:px-20 gap-5 sm:py-10 py-20 px-10 ">
                <h1 className="text-[32px] sm:text-[40px] font-medium text-[#E7816B] ">World-class talent</h1>
                <p className=" text-center lg:text-left leading-[25px]">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

                <br></br>
                <br></br>
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
            </div>
            
        </div>
    )
}