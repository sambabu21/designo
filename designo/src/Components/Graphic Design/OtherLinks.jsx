import { Link } from "react-router-dom"

export default function OtherLinks(){
    return (
        <div>
            <div className="w-[90vw] lg:w-[75vw] flex flex-col lg:flex-row  gap-10  mx-auto justify-between">
                <Link 
                    to="/appdesign"
                    className="bg-app w-full lg:w-[541px] h-[250px] sm:h-[200px] lg:h-[308px] border rounded-[15px] flex flex-col justify-center items-center relative bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50">
                    <div className="z-10 bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50 absolute inset-0 rounded-[15px]"></div>
                    <h1 className="text-white z-10 text-[28px] sm:text-[40px] font-medium tracking-[2px]">APP DESIGN</h1>
                    <p className="text-white z-10 font-medium tracking-[5px]">VIEW PROJECTS <span className="ml-5 text-[#E7816B]">{">"}</span> </p>
                </Link>
                <Link 
                    to="/webdesign"
                    className="bg-web w-full lg:w-[541px] h-[250px] sm:h-[200px] lg:h-[308px] border rounded-[15px] flex flex-col justify-center items-center relative bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50">
                    <div className="z-10 bg-black hover:bg-[#E7816B] hover:bg-opacity-70 bg-opacity-50 absolute inset-0 rounded-[15px]"></div>
                    <h1 className="text-white z-10 text-[28px] sm:text-[40px] font-medium tracking-[2px]">WEB DESIGN</h1>
                    <p className="text-white z-10 font-medium tracking-[5px]">VIEW PROJECTS <span className="ml-5 text-[#E7816B]">{">"}</span> </p>
                </Link>    
            </div>
        </div>
    )
}