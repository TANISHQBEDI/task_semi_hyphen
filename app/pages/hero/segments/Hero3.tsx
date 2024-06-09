import arrow_u_r from '../../../../public/arrow_u_r.svg'
import swap from '../../../../public/swap.svg'
import liquidity from '../../../../public/liquidity.svg'
import bridge from '../../../../public/bridge.svg'
import hero_bottom_1 from '../../../../public/hero_bottom_1.svg'
import hero_bottom_2 from '../../public/hero_bottom_2.svg'

import Image, { ImageProps } from 'next/image'

interface CardProps {
    icon: ImageProps['src'];
    title: string;
    description: string;
}
 
export function Card({ icon, title, description }:CardProps) {
    return (
        <div className=" w-[20em] lg:w-[18em]">
            <div className="flex items-center mb-4 ">
                <Image src={icon} alt={title} className="w-8 h-8 mr-3" />
                <h3 className="text-white font-bold text-lg">{title}</h3>
            </div>
            <p className="text-[#A9A9A9] text-sm">
                {description}
            </p>
        </div>
    )
}
export function Hero3(){
    return(
        <div className="w-full h-screen gap-y-1 flex items-center lg:justify-center relative snap-section">
            
            <div className="relative grid gap-10 ml-[4%] border border-[#3A506B] rounded-[10px] p-[2%] lg:p-[4%] bg-[#011210]">
                <div className='hidden w-full lg:block absolute '>
                    <Image className=' absolute object-cover w-[90%] right-0 top-5' src={hero_bottom_1} alt=''/>

                </div>
                <div className='grid lg:grid-cols-2'>
                    <h1 className='text-white text-[25px] lg:text-[40px] font-[700]'>Getting Started<br/> with <span className='text-[#6FFFE9] '>Semi Hyphen</span></h1>
                    <button className='bg-[#5BC0BE] w-[130px] flex flex-row h-[30px] border border-[#3A506B] shadow-sm shadow-[#67E6D8] justify-center items-center rounded-[5px]'><span className='text-[#040404] font-[700]'>Join Waitlist</span><Image className='fill-[#040404]' src={arrow_u_r} alt=''/></button>
                </div>
                <div className='grid lg:grid-cols-3 lg:gap-5'>
                    <Card 
                        icon={swap} 
                        title="Swap" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
                    />
                    <Card 
                        icon={liquidity} 
                        title="Liquidity" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
                    />
                    <Card 
                        icon={bridge} 
                        title="Bridge" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
                    />
                </div>
            </div>
        </div>
        
    )
}