import airfilterImg from "../../assets/app-design/desktop/image-airfilter.jpg"
import eyecamImg from "../../assets/app-design/desktop/image-eyecam.jpg"
import faceitImg from "../../assets/app-design/desktop/image-faceit.jpg"
import todoImg from "../../assets/app-design/desktop/image-todo.jpg"
import loopstdImg from "../../assets/app-design/desktop/image-loopstudios.jpg"
import { useEffect } from "react"

export default function ProjectList(){
    const projectArr=[{
        name:"AIRFILTER",
        desc:"Solving the problem of poor indoor air quality by filtering the air",
        url:airfilterImg
    },{
        name:"EYECAM",
        desc:"Product that lets you edit your favorite photos and videos at any time",
        url:eyecamImg
    },{
        name:"FACEIT",
        desc:"Get to meet your favorite internet superstar with the faceit app",
        url:faceitImg
    },{
        name:"TODO",
        desc:"A todo app that features cloud sync with light and dark mode",
        url:todoImg
    },{
        name:"LOOPSTUDIOS",
        desc:"A VR experience app made for Loopstudios",
        url:loopstdImg
    }]

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="w-[90vw] lg:w-[75vw] my-32 mx-auto overflow-clip flex gap-10 justify-between flex-wrap">
          {
                projectArr.map((project,i)=>{
                    return (
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center max-h-[478px] lg:h-[478px] lg:w-[350px]  rounded-[15px] bg-[#FDF3F0] hover:bg-[#E7816B] hover:text-white group hover:cursor-pointer" key={i}>
                            <div className="h-[70%] sm:h-full sm:w-1/2 lg:h-[70%] lg:w-full">
                                <img src={project.url} className="lg:rounded-t-[15px] lg:rounded-b-[0px]  sm:rounded-l-[15px] sm:rounded-r-[0px] rounded-t-[15px]"/>
                            </div>
                            <div className="sm:w-1/2 lg:w-full flex flex-col justify-center items-center  lg:h-[30%] h-[30%] py-8 mb-2 sm:mb-0 sm:py-0 ">
                                <h1 className="text-[#E7816B] text-[20px] font-medium tracking-[5px] group-hover:text-white">{project.name}</h1>
                                <p className="w-[75%] mt-4 text-center">{project.desc}</p>
                            </div>
                        </div>)
            })
                    
            }
                    
        </div>
    )
}