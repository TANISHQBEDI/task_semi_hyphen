"use client"

import {Hero1} from '../components/heroSegments/Hero1';
import {Hero2} from "../components/heroSegments/Hero2";
import {Hero3}  from "../components/heroSegments/Hero3";
import {Hero4}  from "../components/heroSegments/Hero4";
import Hero5  from "../components/heroSegments/Hero5";

export function Hero(){
    return(
        <>
            <Hero1/>
            <Hero2/>
            <Hero3/>
            <Hero4/>
            <Hero5/>
        </>
    )
}