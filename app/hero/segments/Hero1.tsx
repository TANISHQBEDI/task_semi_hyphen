import hero_l from '../../../public/hero_l.svg'
import hero_r from '../../../public/hero_r.svg'
import hero_main from '../../../public/hero_main.svg'
import hero_cc from '../../../public/hero_cc.svg'
import arrow_u_r from '../../../public/arrow_u_r.svg'
// import bg from '../../public/bg.png'

import Image from 'next/image'


export function Hero1(){
    return(
        <div className="w-full h-[850px] lg:h-[850px] items-center relative">
            
            <div className="relative lg:h-[850px]">
                <Image className='h-[800px] lg:h-[850px] absolute left-0' src={hero_l} alt=''/>
                <Image className='h-[800px] lg:h-[850px] absolute right-0' src={hero_r} alt=''/>
                <Image className='hidden lg:block absolute lg:right-[25%] lg:top-[10%]' src={hero_main} alt=''/>
                <Image className='hidden lg:block absolute lg:right-[17%] lg:top-[25%]' src={hero_cc} alt='' />
            </div>
            
            <div className='flex flex-col h-[750px] absolute top-0 mt-16 pl-10 gap-y-4 lg:pt-40 lg:left-[3%]'>

                <span className='text-[#A9A9A9] leading-[24px] text-left lg:leading-[26px]'>The Exchange needed on Xion.<br/>Everything awesome at one place.</span>
                <span className='text-[#FFFFFF] font-[700] text-[30px] leading-[45px] text-left lg:text-[50px] lg:leading-[54px]'>REFURBISHING THE<br/> REALM OF <br/>EXCHANGES</span>

                <div className='flex flex-col gap-y-11 mt-10 w-full lg:flex-row lg:gap-x-16'>
                    <button className='w-[150px] flex flex-row h-[40px] border border-[#979DAA] shadow-sm shadow-[#67e6d7] justify-center items-center rounded-[5px]'><span className='text-[#909090]'>Start Building</span><Image src={arrow_u_r} alt=''/></button>
                    <button className='bg-[#5BC0BE] w-[130px] flex flex-row h-[40px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[5px]'><span className='text-[#040404]'>Join Waitlist</span><Image className='fill-[#040404]' src={arrow_u_r} alt=''/></button>
                    
                </div>
                
            </div>

        </div>
    )
}