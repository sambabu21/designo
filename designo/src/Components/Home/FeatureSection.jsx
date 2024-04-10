import WebdesImg from "../../assets/home/desktop/image-web-design-large.jpg"
import WebSmallImg from "../../assets/home/desktop/image-web-design-small.jpg"
import AppDesImg from "../../assets/home/desktop/image-app-design.jpg"
import GraDesImg from '../../assets/home/desktop/image-graphic-design.jpg'
import {Link} from 'react-router-dom'

export default function FeatureSection(){
    return (
        <div className=" flex lg:w-[75vw] w-[90vw]  flex-col lg:flex-row justify-between items-center mx-auto gap-12 mt-20 sm:mb-20 lg:mb-0">
            <Link 
                to="/webdesign"
                className="w-full h-[250px] sm:h-[200px] lg:h-[640px] border rounded-[15px] relative flex flex-col justify-center items-center bg-web">
                <div className="z-10 bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50 absolute inset-0 rounded-[15px]"></div>
                <h1 className="text-white z-20 text-[28px] sm:text-[40px] font-medium tracking-[2px]">WEB DESIGN</h1>
                <p className="text-white z-20 font-medium tracking-[5px]">VIEW PROJECTS<span className="ml-5 text-[#E7816B]">{">"}</span> </p>
            </Link>
            <div className="w-full flex flex-col lg:gap-5 gap-10">
                <Link 
                    to="/appdesign"
                    className="bg-app w-full lg:w-[541px] h-[250px] sm:h-[200px] lg:h-[308px] border rounded-[15px] flex flex-col justify-center items-center relative bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50">
                    <div className="z-10 bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50 absolute inset-0 rounded-[15px]"></div>
                    <h1 className="text-white z-10 text-[28px] sm:text-[40px] font-medium tracking-[2px]">APP DESIGN</h1>
                    <p className="text-white z-10 font-medium tracking-[5px]">VIEW PROJECTS <span className="ml-5 text-[#E7816B]">{">"}</span> </p>
                </Link>
                <Link 
                    to="/graphicdesign"
                    className="bg-graph w-full lg:w-[541px] h-[250px] sm:h-[200px] lg:h-[308px] border rounded-[15px] flex flex-col justify-center items-center relative bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50">
                    <div className="z-10 bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50 absolute inset-0 rounded-[15px]"></div>
                    <h1 className="text-white z-10 text-[28px] sm:text-[40px] font-medium tracking-[2px]">GRAPHIC DESIGN</h1>
                    <p className="text-white z-10 font-medium tracking-[5px]">VIEW PROJECTS <span className="ml-5 text-[#E7816B]">{">"}</span> </p>
                </Link>    
            </div>

        </div>
    )
}