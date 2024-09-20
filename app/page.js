import Image from "next/image";
//import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Description from "./components/Description";

import HeroS from "./components/HeroS";
import Slider from "./components/Slider";
import Teams from "./components/Teams";

export default function Home() {
  
  return (
    <>
    {/* <Hero/> */}
    <HeroS/>

    <Counter/>
    <Slider/>
    <Description />
    {/* <Team/> */}
    <Teams/>
    </>
    
  );
}
