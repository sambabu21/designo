import passionImg from '../../assets/home/desktop/illustration-passionate.svg'
import resourceImg from "../../assets/home/desktop/illustration-resourceful.svg"
import friendImg from "../../assets/home/desktop/illustration-friendly.svg"

export default function Qualities(){
    return <div className='sm:w-[90vw] lg:w-[75vw] flex flex-col lg:flex-row justify-center items-center lg:mt-[150px] sm:mt-0 mt-[120px] gap-20  sm:gap-10 mx-auto'>
        <div className=" flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-10 ">
            <div className='w-[202px] h-[202px] bg-gradient-to-r from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                <img src={passionImg}/>
            </div>
            <div className='w-[90%] sm:w-[60%] lg:w-full flex flex-col justify-center sm:justify-start items-center sm:items-start lg:justify-center lg:items-center gap-5 '>
                <h1 className='text-[20px] font-medium tracking-[5px] leading-[26px]'>PASSIONATE</h1>
                <p className='text-center sm:text-left lg:text-center'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-10">
            <div className='w-[202px] h-[202px] bg-gradient-to-t from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                <img src={resourceImg}/>
            </div>
            <div className='w-[90%] sm:w-[60%] lg:w-full flex flex-col sm:justify-start items-center sm:items-start lg:justify-center lg:items-center gap-5'>
                <h1 className='text-[20px] font-medium tracking-[5px] leading-[26px]'>RESOURCEFUL</h1>
                <p className='text-center sm:text-left lg:text-center'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-10">
            <div className='w-[202px] h-[202px] bg-gradient-to-b from-[#e7826b3d] via-[#d1d3d433] rounded-full'>
                <img src={friendImg}/>
            </div>
            <div className='w-[90%] sm:w-[60%] lg:w-full flex flex-col sm:justify-start items-center sm:items-start lg:justify-center lg:items-center gap-5'>
                <h1 className='text-[20px] font-medium tracking-[5px] leading-[26px]'>FRIENDLY</h1>
                <p className='text-center sm:text-left lg:text-center'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </div>
        </div>
    </div>
}