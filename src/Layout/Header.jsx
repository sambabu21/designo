import {NavLink,Link} from 'react-router-dom'

import Logo from '../assets/DesignoLogo/Oval.png'
import { Disclosure,   } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'


export default function Header(){

    return ( 
    
    <Disclosure as="nav" className='w-full flex md:h-32 justify-around items-center z-20 h-24 '>
      {({ open }) => (
        <>
          <div className="mx-auto w-full ">
            <div className="flex h-16 justify-center relative">
              <div className="flex justify-between items-center w-full mx-8 lg:w-3/4 ">
                <div className="flex  items-center justify-center">
                <Link 
                    to="/"
                    className='flex gap-6 items-center justify-center'
                >
                    <img src={Logo} alt="logo" className='w-[24px] h-[24px]'/>
                    <h1 className='spartan font-bold text-[24px] tracking-[5px]'>DESIGNO</h1>
                </Link>
                </div>
                <div className="hidden md:flex gap-10">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <NavLink
                        to="/company"
                        className='nav__link text-sm sm:text-md  font-normal leading-[14px] tracking-[2px]  mx-2  hover:underline'
                    >
                        OUR COMPANY 
                    </NavLink>
                    <NavLink
                        to="/locations"
                        className='nav__link text-sm sm:text-md  font-normal leading-[14px] tracking-[2px]  mx-2 hover:underline'
                    >
                        LOCATIONS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className='nav__link text-sm sm:text-md  font-normal leading-[14px] tracking-[2px]  mx-2 hover:underline'
                    >
                        CONTACT 
                    </NavLink>
                    
                
                </div>
                
              </div>
              
              
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="absolute right-10 inline-flex items-center justify-center rounded-md p-2 text-[#1D1C1E] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#43766C]">
                  
                  {open ? (
                    <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden fixed top-24 w-full h-[235px] z-10 bg-[#1D1C1E] pb-2">
            <div className="px-[24px] py-[48px] flex flex-col justify-center gap-[32px]">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                to="/company"
                className="block text-[24px] text-white tracking-[2px] leading-[25px]"
              >
                OUR COMPANY
              </Link>
              <Link
                to="/locations"
                className="block text-[24px] text-white tracking-[2px] leading-[25px]"
              >
                LOCATIONS
              </Link>
              <Link
                to="/contact"
                className="block text-[24px] text-white tracking-[2px] leading-[25px]"
              >
                CONTACT
              </Link>
              
            </div>
          
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     
)}
