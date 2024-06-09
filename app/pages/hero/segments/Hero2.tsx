
import Image from 'next/image'

import hero2 from '../../../../public/hero-main-2.svg'

export function Hero2(){
    return(
        <div id="hero2" className="w-full h-screen gap-y-1 relative snap-section">
            <div className="relative">
                <Image className='hidden lg:block w-[60%] absolute lg:left-0 lg:translate-y-1/2' src={hero2} alt=''/>
            </div>
            <div className="w-full justify-center pl-5 lg:pl-0 flex flex-col gap-x-3 pt-[0.5rem] lg:pt-[1%] lg:flex-row lg:gap-y-1  items-center">
                <span className="text-[#FFFFFF] font-[700] text-[25px] lg:text-[40px]">Waitlist Program </span>
                <span className="text-[#6FFFE9] font-[700] text-[25px] lg:text-[40px]">Semi Hyphen</span>
            </div>
            <div className="lg:grid lg:grid-cols-2 pt-[3%]">
                <div className="flex flex-col pl-8 text-white gap-y-10 lg:grid lg:grid-rows-2 text-left justify-center">
                    <span className="text-[#909090] text-[15px] flex items-end">Our Solutions</span>
                    <div>
                        <span className="font-[700] text-[20px] lg:text-[40px]">Our Waitlist Program-</span>
                        <span className="text-[#6FFFE9] font-[700] text-[20px] lg:text-[40px]">The following options for<br/>
                        whitelist capturing.</span>
                    </div>
                    
                    <span className="text-[#909090] text-[15px] lg:hidden">Wallet Confirmation<br/> Token acquisition<br/> NFT acquisition</span>
                    <span className="text-[#909090] hidden lg:block">Wallet Confirmation . Token acquisition . NFT acquisition</span>
                </div>
                <div className="space-y-4 pl-8 pt-8 grid grid-rows-3 text-white">
                    <span className="p-2 lg:py-7 bg-[#011210] border border-[#3A506B] lg:w-1/2 w-[20em] rounded-[5px]">1. Join waitlist by signing with your <br/>
                                    Wallet address or with your email.</span>
                    <span className="p-2 bg-[#011210] border border-[#3A506B] lg:h-[8em] lg:w-1/2 w-[20em] rounded-[5px]">2. Should stake 20,000 SCLX tokens.</span>
                    <span className="p-2 bg-[#011210] border border-[#3A506B] lg:w-1/2 w-[20em] rounded-[5px]">3. Should have Scalex Bot NFT</span>

                </div>
            </div>
            
            
        </div>
    )
}