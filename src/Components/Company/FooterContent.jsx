import rdImgDes from "../../assets/about/desktop/image-real-deal.jpg"
import rdImgTab from "../../assets/about/tablet/image-real-deal.jpg"
import rdImgMob from "../../assets/about/mobile/image-real-deal.jpg"

export default function FooterContent(){
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-[75vw] sm:w-[90vw] sm:my-20 mx-auto bg-[#FDF3F0]  sm:rounded-[15px] bg-talent">
            
            <div className="sm:h-1/2 lg:w-[60%] flex flex-col justify-center items-center lg:items-start sm:px-10 lg:px-20 gap-5 sm:py-10 py-20 px-10 ">
                <h1 className="text-[32px] sm:text-[40px] font-medium text-[#E7816B] ">The real deal</h1>
                <p className=" text-center lg:text-left leading-[25px]">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

                <br></br>
                <br></br>
                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
            </div>
            <div>
                <img src={rdImgDes} className="lg:rounded-r-[15px] hidden lg:block"/>
                <img src={rdImgTab} className="rounded-t-[15px] hidden sm:block lg:hidden"/>
                <img src={rdImgMob} className="sm:hidden"/>
            </div>
            
        </div>
    )
}