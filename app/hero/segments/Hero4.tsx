import Image from "next/image";

import twitter from '../../../public/button/twitter.svg'
import telegram from '../../../public/button/telegram.svg'
import medium from '../../../public/button/medium.svg'
import arrow_u_r from '../../../public/arrow_u_r.svg'

export function Hero4(){
    return(
        <div className="w-full h-screen gap-y-1 flex items-center lg:justify-center snap-section">
            <div className="pl-[4%]">
                <div>
                    <h6 className="text-white text-[21px] lg:text-[42px] lg:leading-[60px] font-[700] lg:text-center">Join Our <span className="text-[#6FFFE9]">Community</span></h6>
                    <h1 className="lg:text-[70px] text-[35px] leading-10 font-[700] lg:text-center text-transparent bg-clip-text bg-gradient-to-b from-[#6FFFE9] to-[#052C26] lg:leading-[80px]">Sign Up and Follow Our <br/> Community Pages</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between mt-5">
                    <button className="flex w-[37%] lg:w-auto items-center gap-1 px-[2%] py-1 rounded-[5px] border border-[#979DAA]"><Image className="w-4 h-4 lg:w-5 lg:h-5" src={twitter} alt=""/><span className="text-[#909090] lg:text-[24px] font-[700]">Twitter</span><Image className="w-5 h-5 lg:w-6 lg:h-6" src={arrow_u_r} alt=""/></button>
                    <button className="flex w-[37%] lg:w-auto items-center gap-1 px-[2%] py-1 rounded-[5px] border border-[#979DAA]"><Image className="w-4 h-4 lg:w-5 lg:h-5" src={telegram} alt=""/><span className="text-[#909090] lg:text-[24px] font-[700]">Telegram</span><Image className="w-5 h-5 lg:w-6 lg:h-6" src={arrow_u_r} alt=""/></button>
                    <button className="flex w-[37%] lg:w-auto items-center gap-1 px-[2%] py-1 rounded-[5px] border border-[#979DAA]"><Image className="w-4 h-4 lg:w-5 lg:h-5" src={medium} alt=""/><span className="text-[#909090] lg:text-[24px] font-[700]">Medium</span><Image className="w-5 h-5 lg:w-6 lg:h-6" src={arrow_u_r} alt=""/></button>
                    
                </div>
            </div>
        </div>
    )
}