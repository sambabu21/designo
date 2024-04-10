import heroImgDes from "../../assets/about/desktop/image-about-hero.jpg"
import heroImgTab from "../../assets/about/tablet/image-about-hero.jpg"

export default function Banner(){
    return(
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-[75vw] sm:w-[90vw] mx-auto bg-[#E7816B]  sm:rounded-[15px] bg-about">
            <div className="sm:h-1/2 lg:w-[60%] flex flex-col justify-center items-center lg:items-start sm:px-10 lg:px-20 gap-5 sm:py-10 py-20 px-10 ">
                <h1 className="text-[32px] sm:text-[48px] font-medium text-white ">About Us</h1>
                <p className="text-white text-center lg:text-left leading-[25px]">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div>
                <img src={heroImgDes} className="lg:rounded-r-[15px] block sm:hidden lg:block"/>
                <img src={heroImgTab} className="rounded-t-[15px] hidden sm:block lg:hidden"/>
            </div>
        </div>
    )
}