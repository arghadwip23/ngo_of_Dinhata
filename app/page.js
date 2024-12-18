import Image from "next/image";
//import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Description from "./components/Description";
import toast,{Toaster} from "react-hot-toast";
import HeroS from "./components/HeroS";
import Slider from "./components/Slider";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Swal from 'sweetalert2';
import withReactContent from  'sweetalert2-react-content';



export default function Home() {
  
  const MySwal = withReactContent(Swal)


  return (
    <>
   
    <HeroS/>

    <Counter/>
    {/* <Slider/> */}
    <Description />
   
    <Teams/>
    <Testimonials/>
    <Contact tost={toast}/>
    <Toaster />
    {/* <Faq/> */}
    
    </>
    
  );
}
