import { Link } from "react-router-dom"
import HeroPhone from "../../assets/home/desktop/image-hero-phone.png"

export default function Hero(){
    return (
        <div className="w-full sm:w-[90vw] lg:w-[75vw] lg:h-[640px] h-[843px]  bg-[#E7816B] mx-auto  flex flex-col  items-center lg:items-start lg:justify-center  relative sm:rounded-[15px] sm:px-[80px] gap-[100px] overflow-clip bg-hero">
            <div className="lg:w-1/2  flex flex-col items-center lg:items-start  mt-20 text-center lg:text-left ">
                <h1 className="text-[32px] sm:text-[48px] font-medium text-white sm:leading-[50px] leading-[36px]">Award-winning custom designs and digital branding solutions</h1>
                <p className="text-white leading-[26px] mt-8 px-5 lg:px-0">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Link to="/company">
                    <button className="w-[152px] h-[56px] mt-8 bg-white font-medium rounded-[8px] tracking-[1px] hover:bg-[#FFAD9B] hover:text-white ">LEARN MORE</button>
                </Link>
            </div>
            <div className="absolute lg:-right-[80px] lg:-bottom-[220px] sm:-bottom-[380px] -bottom-[200px]">
                <img src={HeroPhone} />
            </div>
        </div>
    )
}