
import big from '../../public/sphere/big.svg'

import Image from 'next/image';

interface sphereSize{
    size:number;
    blur?:number;
}

export function RotatingSphere({size,blur}:sphereSize){
  return (
    <Image 
        src={big} 
        alt='' 
        width={size} 
        height={size}
        style={{filter:`blur(${blur}px)`}}
    />
  );
};

export default RotatingSphere;
