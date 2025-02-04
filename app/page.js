
import Counter from "./components/Counter";
import Description from "./components/Description";
import toast,{Toaster} from "react-hot-toast";
import HeroS from "./components/HeroS";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";


// homeMetadata.js in Next.js

export const  metadata = {
  title: "Dayboddho NGO - Empowering Lives, Inspiring Change",
  description:
  "Welcome to Dayboddho, an NGO led by dedicated teachers from Dinhata, committed to supporting the needy, especially students. Discover our mission, projects, and how you can contribute to creating a brighter future.",
  keywords: [
  "Dayboddho",
  "NGO Dinhata",
  "Student Support",
  "Educational Aid",
  "Community Development",
  "Social Impact",
  "Volunteer Opportunities",
  "Empowering Students",
  "Charity Initiatives",
  "Non-Profit Organization"
  ],
  openGraph: {
  title: "Dayboddho NGO - Making a Difference in Dinhata",
  description:
  "Join Dayboddho in its mission to support students and communities through impactful initiatives and educational programs.",
  url: "https://dayboddho.vercel.app",
  type: "website",
  images: [
  {
  url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
  alt: "Dayboddho Homepage Featured Image"
  }
  ]
  },
  twitter: {
  card: "summary_large_image",
  title: "Dayboddho NGO - Transforming Lives Through Education",
  description:
  "Discover how Dayboddho is empowering students and communities with education and support initiatives.",
  images: [
  {
  url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
  alt: "Dayboddho Homepage Key Image"
  }
  ]
  }
  };

export default function Home() {
  
  


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
