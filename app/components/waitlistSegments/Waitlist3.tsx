

import { useState,useEffect } from 'react';
import Image from 'next/image';
import horizontal from '../../../public/tree/horizontal.svg';
import vertical from '../../../public/tree/vertical.svg';
import image1 from '../../../public/tree/image1.svg';
import image2 from '../../../public/tree/image1.svg';
import image3 from '../../../public/tree/image1.svg';
import image4 from '../../../public/tree/image1.svg';

export function Waitlist3() {
    const [activeButton, setActiveButton] = useState(1);

    const content = [
        {
            title: 'Task Completion',
            text: '"Join the waitlist now to secure your spot and gain early access to the innovative features and benefits of the Semi Hyphen ecosystem."',
            image: image1
        },
        {
            title: 'Get Whitelisted',
            text: '"Get whitelisted to start exchanging and trading on the blazeswap platform, gaining early access to exclusive features and benifits."',
            image: image2
        },
        {
            title: 'Score Points',
            text: '"Complete tasks and score points to unlock rewards and exclusive features on the platform."',
            image: image3
        },
        {
            title: 'Lead the Board',
            text: '"Climb to the top of the leaderboard to win exciting rewards and exclusive prizes."',
            image: image4
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveButton(prev => (prev % 4) + 1);
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="w-full h-screen snap-section relative">
            <div className="text-white flex flex-col items-center justify-center pt-[4%]">
                <h1 className="font-bold text-3xl lg:text-5xl">How it <span className="text-[#6FFFE9]">Works?</span></h1>
            </div>
            <div className="pt-[4%] lg:pt-[6%] relative flex flex-col items-center">
                <div className="relative w-auto mb-4">
                    <Image src={vertical} alt='' className="w-auto" />
                    <div className="absolute w-[100px] h-[100px] flex items-center justify-center bg-[#1D1D1D] border border-[#3A506B] shadow-custom top-0 transform -translate-x-1/3 lg:-translate-x-1/3 lg:-translate-y-1/2">
                        <Image src={content[activeButton - 1].image} alt='' className=" w-[75px] h-[75px] " />
                    </div>
                </div>
                <div className="relative w-auto">
                    <Image src={horizontal} alt='' className="w-auto" />
                    <div className="text-[#909090] text-[32px] font-[700] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 flex space-x-4 lg:space-x-20">
                        <button onClick={() => setActiveButton(1)} className={`shadow-custom border border-[#3A506B] w-[75px] h-[75px] rounded-[10px] ${activeButton === 1 ? 'bg-[#167E6E]' : 'bg-[#1D1D1D]'}`}><span>#1</span></button>
                        <button onClick={() => setActiveButton(2)} className={`shadow-custom border border-[#3A506B] w-[75px] h-[75px] rounded-[10px] ${activeButton === 2 ? 'bg-[#167E6E]' : 'bg-[#1D1D1D]'}`}><span>#2</span></button>
                        <button onClick={() => setActiveButton(3)} className={`shadow-custom border border-[#3A506B] w-[75px] h-[75px] rounded-[10px] ${activeButton === 3 ? 'bg-[#167E6E]' : 'bg-[#1D1D1D]'}`}><span>#3</span></button>
                        <button onClick={() => setActiveButton(4)} className={`shadow-custom border border-[#3A506B] w-[75px] h-[75px] rounded-[10px] ${activeButton === 4 ? 'bg-[#167E6E]' : 'bg-[#1D1D1D]'}`}><span>#4</span></button>
                    </div>
                </div>
                <div className="mt-8 text-white text-center px-4 lg:px-8 w-[80%] lg:w-[50%] pt-5">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#5BC0BE] leading-tight">{content[activeButton - 1].title}</h2>
                    <p className="mt-4 text-lg lg:text-xl leading-loose">{content[activeButton - 1].text}</p>
                </div>
            </div>
        </div>
    );
}
