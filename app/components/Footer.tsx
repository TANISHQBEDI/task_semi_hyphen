import Image from "next/image";

import logo from '../../public/logo.svg'
import copyright from '../../public/copyright.svg'

export function Footer(){
    return(
        <div className="w-full h-screen flex flex-col justify-between lg:justify-center snap-section border-t border-[#3A506B] relative">
            <div className="flex flex-row lg:flex-row justify-between px-4 lg:px-[4%] py-8 lg:py-16">
                <Image className="w-[100px] h-[50px] lg:w-[150px] lg:h-[100px] mb-4 lg:mb-0" src={logo} alt="" />
                <div className="flex flex-row lg:flex-row gap-8 lg:gap-[90px] mb-4 lg:mb-0">
                    <div className="text-white">
                        <span className="font-bold">Product</span>
                        <div>
                            <ul className="space-y-2 mt-2">
                                <li>Doc</li>
                                <li>Waitlist</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white">
                        <span className="font-bold">Info</span>
                        <div>
                            <ul className="space-y-2 mt-2">
                                <li>Home</li>
                                <li>Waitlist</li>
                                <li>About Us</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="bg-[#5BC0BE] w-[100px] lg:w-[130px] flex flex-row h-[35px] lg:h-[40px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[5px]">
                    <span className="font-[700] text-[15px]">Launch App</span>
                </button>
            </div>
            <div className="relative lg:absolute lg:bottom-0 lg:left-0 w-full lg:w-auto text-left flex flex-col lg:flex-row items-center px-4 lg:px-10 py-8 lg:py-16">
                <span className="lg:text-[150px] font-[700] text-transparent bg-clip-text bg-gradient-to-b from-[#6FFFE9] to-[#132B28] text-[50px] lg:text-left">Semi Hyphen</span>
                <div className="text-white flex items-center mt-4 lg:mt-0 lg:ml-4">
                    <Image src={copyright} alt="" className="w-5 h-5 lg:w-10 lg:h-10" />
                    <span className="ml-2">Semi Hyphen 2024</span>
                </div>
            </div>
        </div>
    )
}