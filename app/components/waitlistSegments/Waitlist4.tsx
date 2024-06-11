

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import faq from '../../../public/faq.svg';

export function Waitlist4() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                const contentHeight = ref.scrollHeight;
                ref.style.height = expandedIndex === index ? `100%` : '50px';
            }
        });
    }, [expandedIndex]);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full h-screen snap-section relative">
            <div className="flex flex-col h-full w-full items-center justify-center text-white transition-all transform">
                <h1 className="text-[42px] font-[700]">FA<span className="text-[#6FFFE9]">Q</span></h1>
                <div className="w-[60%] flex flex-col gap-10">
                    {['Who is the CEO of Semi Hyphen?', 'What is the vision of Semi Hyphen?', 'How can I join Semi Hyphen?'].map((question, index) => (
                        <div
                            key={index}
                            ref={el => { contentRefs.current[index] = el; }}
                            className={`flex items-center transition-height duration-500 gap-5 ${expandedIndex === index ? 'bg-gradient-to-bg' : 'bg-[#040404]'} border border-[#3A506B] p-[10px] rounded-[10px] text-[24px]`}
                            onClick={() => toggleExpand(index)}
                        >
                            <Image src={faq} alt="" className={`${expandedIndex === index ? 'rotate-45' : ''} transition-all duration-500`} />
                            {expandedIndex !== index && (<span>{question}</span>)}
                            <span className={`${expandedIndex === index ? 'block' : 'hidden'}`}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat hic, voluptate minima vitae sit. Iusto at fugiat repudiandae soluta dignissimos aperiam quia nisi necessitatibus, ullam perspiciatis non facere laborum.
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
