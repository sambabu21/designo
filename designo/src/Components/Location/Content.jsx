import canMapDes from "../../assets/locations/desktop/image-map-canada.png" 
import canMapTab from "../../assets/locations/tablet/image-map-canada.png"
import ausMapDes from "../../assets/locations/desktop/image-map-australia.png" 
import ausMapTab from "../../assets/locations/tablet/image-map-australia.png" 
import ukMapDes from "../../assets/locations/desktop/image-map-united-kingdom.png" 
import ukMapTab from "../../assets/locations/tablet/image-map-uk.png" 

export default function Content(){
    return (
        <div className="w-full sm:w-[90vw] lg:w-[75vw] mx-auto flex flex-col justify-between items-center gap-10 mb-40 ">
            <div className="flex flex-col-reverse lg:flex-row  w-full lg:h-[326px] justify-between  sm:gap-10">
                <div className="sm:h-[326px] lg:w-[65%] h-full flex flex-col justify-center p-10 sm:px-32  items-center sm:items-start  bg-[#FDF3F0] rounded-[15px] bg-talent">
                    <h1 className="text-[40px] font-medium text-[#E7816B] ">Canada</h1>
                    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-5 ">
                        <p className="text-center sm:text-left"><span className="font-bold">Designo Central Office </span><br></br>
                           3886 Wellington Street<br></br>
                           Toronto, Ontario M9C 3J5
                        </p>
                        <p className="text-center sm:text-left">
                            <span className="font-bold">Contact</span><br></br> 
                            P : +1 253-863-8967<br></br>
                            M : contact@designo.co
                        </p>
                        
                    </div>
                </div>
                <div className="lg:h-full ">
                    <img src={canMapDes} className="sm:hidden lg:block lg:rounded-[15px] h-full"/>
                    <img src={canMapTab} className="hidden sm:block lg:hidden rounded-[15px] h-full"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:h-[326px] justify-between  sm:gap-10">
                <div className="h-full ">
                    <img src={ausMapDes} className="sm:hidden lg:block lg:rounded-[15px] h-full"/>
                    <img src={ausMapTab} className="hidden sm:block lg:hidden rounded-[15px] h-full"/>
                </div>
                <div className="sm:h-[326px] lg:w-[65%] h-full flex flex-col justify-center p-10 sm:px-32  items-center sm:items-start  bg-[#FDF3F0] rounded-[15px] bg-talent">
                    <h1 className="text-[40px] font-medium text-[#E7816B] ">Australia</h1>
                    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-5 ">
                        <p className="text-center sm:text-left"><span className="font-bold">Designo AU Office </span><br></br>
                        19 Balonne Street<br></br>
                        New South Wales 2443
                        </p>
                        <p className="text-center sm:text-left">
                            <span className="font-bold">Contact</span><br></br> 
                            P : (02) 6720 9092<br></br>
                            M : contact@designo.au
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[326px] justify-between  sm:gap-10">
                <div className="sm:h-[326px] lg:w-[65%] h-full flex flex-col justify-center p-10 sm:px-32  items-center sm:items-start  bg-[#FDF3F0] rounded-[15px] bg-talent">
                    <h1 className="text-[40px] font-medium text-[#E7816B] ">United Kingdom</h1>
                    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-5 ">
                        <p className="text-center sm:text-left"><span className="font-bold">Designo UK Office</span><br></br>
                        13  Colorado Way<br></br>
                        Rhyd-y-fro SA8 9GA
                        </p>
                        <p className="text-center sm:text-left">
                            <span className="font-bold">Contact</span><br></br> 
                            P : 078 3115 1400<br></br>
                            M : contact@designo.uk
                        </p>
                        
                    </div>
                </div>
                <div className="lg:h-full ">
                    <img src={ukMapDes} className="sm:hidden lg:block lg:rounded-[15px] h-full"/>
                    <img src={ukMapTab} className="hidden sm:block lg:hidden rounded-[15px] h-full"/>
                </div>
            </div>
        </div>
    )
}