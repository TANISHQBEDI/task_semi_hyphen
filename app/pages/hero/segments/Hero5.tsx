"use client";

import Image from "next/image"
import { useRef } from "react"

import hero_bottom_1 from '../../../../public/hero_bottom_1.svg'
import hero_bottom_2 from '../../../../public/hero_bottom_2.svg'
import line from '../../../../public/line.svg'

export function Hero5(){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput = () => {
        if (inputRef.current) {
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }
    };
    return(
        <div className="w-full h-screen gap-y-1 flex items-center justify-center lg:justify-center snap-section">
          <div className="p-[20px] relative w-[90%] lg:w-[80%] grid gap-10 border border-[#3A506B] rounded-[10px] bg-[#011210]">
            <div className="hidden lg:block absolute inset-0">
              <Image className="absolute bottom-0 right-0 w-[50%] h-auto object-contain" src={hero_bottom_1} alt="" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between z-10">
              <div className="font-[700] text-left relative">
                <div className="absolute lg:block">
                  <Image src={line} alt="" />
                </div>
                <span className="text-white text-[25px] lg:text-[48px]">Newsletter</span><br />
                <span className="text-[#909090] text-[15px] lg:text-[20px]">Subscribe to the Semi Hyphen newsletter<br />
                  to be updated with the ecosystem.</span>
            </div>
            <div className="flex flex-col justify-between items-start lg:items-start font-[700] text-[15px] lg:text-[20px] mt-5 lg:mt-0">
              <span className="text-[#909090]">Your email address</span>
              <input className="bg-[#011210] font-medium text-[#909090] px-3 py-1 rounded-[10px] border border-[#3A506B] focus:outline-none overflow-hidden"
                type="text"
                onInput={handleInput}
                ref={inputRef}
              />
              <button className="bg-[#5BC0BE] w-[80px] lg:w-[130px] flex flex-row h-[35px] lg:h-[40px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[10px] mt-2 lg:mt-4">
                <span className="">Sign in</span>
              </button>
            </div>
        </div>
      </div>
    </div>
    )
}