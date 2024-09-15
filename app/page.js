import Image from "next/image";
//import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Team from "./components/Team";
import HeroS from "./components/HeroS";
import Slider from "./components/Slider";
import Teama from "./components/Teama";

export default function Home() {
  
  return (
    <>
    {/* <Hero/> */}
    <HeroS/>

    <Counter/>
    <Slider/>
    <Team/>
    <Teama/>
    </>
    
  );
}
