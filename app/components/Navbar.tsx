import Image from 'next/image'
import logo from '../../public/logo.svg'
import arrow_u_r from '../../public/arrow_u_r.svg'
import twitter from '../../public/twitter.svg'
import telegram from '../../public/telegram.svg'

export  function Navbar() {
  return (
    <div className="flex w-full items-center justify-between py-[10px] px-[15px] lg:py-[20px] lg:px-[30px] bg-[#040404] lg:h-[80px] snap-section">
      <div className='flex gap-x-[60px]'>
        <div className='flex gap-x-1 items-center'>
          <Image className='' src={logo} alt='Logo'/>
          <span className='hidden lg:flex text-[#6FFFE9] items-center '>Semi Hyphen</span>
        </div>
        
        <div className='hidden lg:flex gap-x-1 items-center'>
          
          <span className='text-[#909090]'>Doc</span>
          <Image src={arrow_u_r} alt=''/>
        </div>
        
        <div className='hidden lg:flex gap-x-1 items-center'>
          <span className='text-[#909090]'>WaitList</span>
          <Image src={arrow_u_r} alt=''/>
        </div>
        
      </div>  
      <div className='flex items-center gap-x-6'>
        <div className='flex items-center gap-x-3'>
          <Image src={twitter} alt=''/>

          <Image src={telegram} alt=''/>
        </div>
        <button className='bg-[#5BC0BE] border-[#3A506B] rounded-[5px] h-[34px]'><span className='text-[#07100E] font-[700] text-[15px] px-2 lg:px-4'>Launch App</span></button>
      </div> 
    </div>
  )
}
