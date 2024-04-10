import { useState } from "react"

export default function ContactForm(){
    const [errors,setErrors] = useState({})
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    const validate=(data)=>{
        const internalErrors={}
        if (data.name === "") {
            internalErrors.name = "Can't be empty";
          }
      
        if (data.email === "") {
            internalErrors.email = "Can't be empty";
        } else if (
            !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(data.email)
          ) {
            internalErrors.email = "Invalid email address";
        }
        if (data.phone==="") {
            internalErrors.phone = "Can't be empty";
        }
        if(data.message===""){
            internalErrors.message = "Can't be empty";
        }
      
          if (internalErrors.name || internalErrors.email || internalErrors.phone || internalErrors.message) {
            setErrors(internalErrors);
            return false;
          } else {
            setErrors({});
            return true;
          }
    }

    return(
        <div className="w-full sm:w-[90vw] lg:w-[75vw] lg:h-[480px] flex flex-col lg:flex-row justify-around items-center px-5 py-20 sm:p-20 bg-[#E7816B] mx-auto sm:rounded-[15px] mb-40 bg-contact">
            <div className="lg:w-[40%]">
                <h1 className="text-white font-medium text-[32px] sm:text-[48px] mb-5">Contact Us</h1>
                <p className="text-white">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <form
                onSubmit={handleSubmit}  
                className="flex flex-col w-full lg:w-[380px] gap-5 mt-10 lg:mt-0">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-transparent placeholder-[#ffffff8c] text-white font-medium border-b p-2 "
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-transparent placeholder-[#ffffff8c] text-white font-medium border-b p-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}

                />
                <input 
                    type="phone" 
                    placeholder="Phone" 
                    className="bg-transparent placeholder-[#ffffff8c] text-white font-medium border-b p-2"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                />
                <input 
                    type="textarea" 
                    placeholder="Your Message" 
                    className="h-[102px] bg-transparent placeholder-[#ffffff8c]  text-white p-2 font-medium border-b"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                />
                <button className="w-[152px] h-[56px] bg-white font-medium rounded-[8px] tracking-[1px] hover:bg-[#FFAD9B] hover:text-white mx-auto sm:mr-0 sm:ml-auto">SUBMIT</button>
            </form>
        </div>
    )
}