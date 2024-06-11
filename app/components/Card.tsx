import Image, { ImageProps } from "next/image";



interface CardProps {
    title: string;
    description: string;
    image: ImageProps["src"];
    overlayText: string; // New prop for overlay text
}

export function Card({ image, title, description, overlayText }: CardProps) {
    return (
        <div className="relative min-w-sm rounded-[20px] overflow-hidden shadow-custom bg-[#011210] flex flex-col items-center justify-center text-center">
            <div className="relative flex justify-center">
                <Image className="w-[80%] rounded-[10px] opacity-50" src={image} alt={title} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-train-one text-[48px] font-[400] leading-[69.5px]">{overlayText}</span>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="text-[16px] text-[#5BC0BE] leading-[30px] mb-2">{title}</div>
                <p className="text-[#909090] text-[14px]">{description}</p>
            </div>
        </div>
    );
}
