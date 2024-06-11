// pages/Waitlist2.tsx
import React from "react";
import RotatingSphere from "../../components/RotatingSphere";

import Image from "next/image";

import arrow_u_r from '../../../public/arrow_u_r.svg'

const Waitlist2: React.FC = () => {
  return (
    <div className="w-full h-screen snap-section relative">
        <div className="absolute right-0 top-[10%] h-full w-full flex flex-col items-center justify-center space-y-8 lg:space-y-12">
            <div className="relative h-full w-full">
                <div className="absolute hidden lg:block lg:top-[1%] lg:right-[1%] z-10">
                    <RotatingSphere size={180} blur={3} />
                </div>
                <div className="absolute hidden lg:block lg:top-[14%] lg:right-[5%] z-20">
                    <RotatingSphere size={200} blur={2} />
                </div>
                <div className="absolute hidden lg:block lg:top-[20%] lg:right-[14%] z-30">
                    <RotatingSphere size={300} blur={1} />
                </div>
                <div className="absolute hidden lg:block lg:top-[20%] lg:right-[24%] z-40">
                    <RotatingSphere size={500} blur={0} />
                </div>
            </div>
        </div> 
        <div className="text-white absolute top-0 w-full">
            <h1 className="lg:text-[42px] text-[24px] font-[700] leading-[60px] text-center my-[2%]">Discover the <span className="text-[#6FFFE9]">Waitlist</span></h1>
            <div className="ml-[10%] mt-[10%] flex flex-col gap-2 ">
                <h1 className="lg:text-[36px] text-[21px] leading-[60px]">About <span className="text-[#6FFFE9]">Waitlist</span></h1>
                <span className="text-[#909090] leading-[22px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Provident, maxime.</span>
                <span className="text-[#909090] leading-[22px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi, obcaecati.</span>
                <button className="bg-[#5BC0BE] w-[110px] lg:w-[130px] flex flex-row h-[32px] lg:h-[40px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[5px]">
                    <span className='text-[#040404] text-[12px] lg:text-[16px] font-[700]'>Join Waitlist</span>
                    <Image className='fill-[#040404]' src={arrow_u_r} alt='' />
                </button>
            </div>

        </div>

    </div>
  );
};

export default Waitlist2;
