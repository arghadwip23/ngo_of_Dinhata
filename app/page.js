import Image from "next/image";
//import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Description from "./components/Description";

import HeroS from "./components/HeroS";
import Slider from "./components/Slider";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  
  return (
    <>
   
    <HeroS/>

    <Counter/>
    {/* <Slider/> */}
    <Description />
   
    <Teams/>
    <Testimonials/>
    <Contact/>
    {/* <Faq/> */}
    
    </>
    
  );
}
