import Image from "next/image";
//import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Team from "./components/Team";
import HeroS from "./components/HeroS";


export default function Home() {
  
  return (
    <>
    {/* <Hero/> */}
    <HeroS/>

    <Counter/>
    <Team/>
    </>
    
  );
}
