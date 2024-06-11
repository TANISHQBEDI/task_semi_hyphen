

import Image from "next/image"
import arrow_u_r from '../../../public/arrow_u_r.svg'
import { Card } from "@/app/components/Card"

import hero_l from '../../../public/hero_l.svg'
import hero_r from '../../../public/hero_r.svg'

import one from '../../../public/button/one.svg'
import two from '../../../public/button/two.svg'
import three from '../../../public/button/three.svg'

import bg from '../../../public/card/bg.svg'

import { useState } from "react"

export default function Waitlist1() {
    const [selectedButton, setSelectedButton] = useState('one');

    const handleButtonClick = (button:string) => {
        setSelectedButton(button);
    };

    const getCardContent = () => {
        switch (selectedButton) {
        case 'one':
            return { title: 'Join Waitlist', description: 'Description for Join Waitlist' };
        case 'two':
            return { title: 'Stake', description: 'Description for Stake' };
        case 'three':
            return { title: 'NFT Acquisition', description: 'Description for NFT Acquisition' };
        default:
            return { title: 'Join Waitlist', description: 'Description for Join Waitlist' };
        }
    };

    const { title, description } = getCardContent();
    return (
        <div className="w-full h-screen relative">
            <div className="relative lg:h-full">
                <Image className='h-full lg:h-[850px] absolute left-0 object-cover' src={hero_l} alt=''/>
                <Image className='h-full lg:h-[850px] absolute right-0 object-cover' src={hero_r} alt=''/>
            </div>
            <div className="grid grid-rows-2 lg:grid-cols-2 text-white h-full absolute top-0">
                <div className="flex flex-col justify-center text-left lg:pl-[25%] space-y-4 p-4">
                    <span className="text-[#909090] text-[16px] lg:text-[20px]">Our Solutions</span>
                    <span className="text-[24px] lg:text-[36px] leading-tight">Our Waitlist Program-</span>
                    <span className="text-[#6FFFE9] text-[16px] lg:text-[20px] lg:leading-[54px]">The following options for<br />whitelist capturing.</span>
                    <div className="flex space-x-2 mt-4">
                        <button className="w-[120px] lg:w-[150px] flex flex-row h-[32px] lg:h-[40px] border border-[#979DAA] shadow-sm shadow-[#67e6d7] justify-center items-center rounded-[5px]">
                            <span className='text-[#909090] text-[12px] lg:text-[16px]'>Start Building</span>
                            <Image src={arrow_u_r} alt='' />
                        </button>
                        <button className="bg-[#5BC0BE] w-[110px] lg:w-[130px] flex flex-row h-[32px] lg:h-[40px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[5px]">
                            <span className='text-[#040404] text-[12px] lg:text-[16px]'>Join Waitlist</span>
                            <Image className='fill-[#040404]' src={arrow_u_r} alt='' />
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 p-4">
                    <Card image={bg} title={title} description={description} overlayText="HELLO"/>
                    <div className="flex items-center flex-col justify-center gap-3 lg:gap-5">
                        <button className="flex flex-col items-center shadow-button rounded-[10px] lg:h-[24%] w-[40%]" onClick={()=>{handleButtonClick('one')}}><Image src={one} alt=""/><span className="text-xs lg:text-sm">Waitlist</span></button>
                        <button className="flex flex-col items-center shadow-button rounded-[10px] lg:h-[24%] w-[40%]" onClick={()=>{handleButtonClick('two')}}><Image src={two} alt=""/><span className="text-xs lg:text-sm">Stake</span></button>
                        <button className="flex flex-col items-center shadow-button rounded-[10px] lg:h-[24%] w-[40%]" onClick={()=>{handleButtonClick('three')}}><Image src={three} alt=""/><span className="text-xs lg:text-sm">NFT Acquition</span></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

