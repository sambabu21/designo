import canadaImg from "../../assets/shared/desktop/illustration-canada.svg"
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg"
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg"

export default function Locations(){
    const locationList=[{
        name:"CANADA",
        url:canadaImg
    },{
        name:"AUSTRALIA",
        url:australiaImg
    },{
        name:"UNITED KINGDOM",
        url:ukImg
    }]
    return(
        <div className="sm:w-[90vw] lg:w-[75vw] mx-auto my-40 flex flex-col lg:flex-row justify-around items-center gap-10">
            <div  className="flex flex-col justify-center items-center mb-10 lg:mb-10">
                <div className='w-[202px] h-[202px] bg-gradient-to-b from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                    <img src={canadaImg}/>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 gap-8 ">
                    <h1 className="text-[20px] tracking-[5px] font-medium">CANADA</h1>
                    <button className="w-[152px] h-[56px] bg-[#E7816B] text-white rounded-[8px] tracking-[1px] font-medium hover:bg-[#FFAD9B]">SEE LOCATION</button>
                </div>
            </div>
            <div  className="flex flex-col justify-center items-center mb-10 lg:mb-10">
                <div className='w-[202px] h-[202px] bg-gradient-to-r from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                    <img src={australiaImg}/>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 gap-8 ">
                    <h1 className="text-[20px] tracking-[5px] font-medium">AUSTRALIA</h1>
                    <button className="w-[152px] h-[56px] bg-[#E7816B] text-white rounded-[8px] tracking-[1px] font-medium hover:bg-[#FFAD9B]">SEE LOCATION</button>
                </div>
            </div>
            <div  className="flex flex-col justify-center items-center mb-10 lg:mb-10">
                <div className='w-[202px] h-[202px] bg-gradient-to-t from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                    <img src={ukImg}/>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 gap-8 ">
                    <h1 className="text-[20px] tracking-[5px] font-medium">UNITED KINGDOM</h1>
                    <button className="w-[152px] h-[56px] bg-[#E7816B] text-white rounded-[8px] tracking-[1px] font-medium hover:bg-[#FFAD9B]">SEE LOCATION</button>
                </div>
            </div>
        </div>
    )
}