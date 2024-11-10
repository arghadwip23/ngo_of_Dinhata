"use client";
import {React,useEffect,useState} from 'react'
import Link from 'next/link';
import db from '@/util/firebase'
import { collection, getDocs } from "firebase/firestore";




export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  //const storage = getStorage(app)

  useEffect(() => {
    const fetchImages = async () => {
      
      try {
        // const result = await listAll(storageRef);
        // const urls = await Promise.all(
        //   result.items.map(async (imageRef) =>{
        //    const url= await getDownloadURL(imageRef);
        //    const metadata = await getMetadata(imageRef);
        //    return{
        //     link:url,
        //     caption : metadata.customMetadata?.caption||"caption not available",
        //     filename : metadata.name,
        //     dateCreated:metadata.timeCreated? new Date(metadata.timeCreated).toLocaleDateString():"date not available",
        //    };
        //   })
        // );
       
        // var mytesting = getMetadata(ref(storage,'gallery/IMG-20231218-WA0017.jpg'));
        // console.log(mytesting);
        
        // setImageUrls(urls);
        const snap = await getDocs(collection(db,"gallery"));
            await setImageUrls(snap.docs);
            
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="p-8 bg-gray-100 min-h-screen text-black">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        আমাদের গ্যালারি
      </h2>

      {loading ? (
        <p className="text-center text-black">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 masonry ">
          {imageUrls.map((image, index) => (

            <div key={index} className=''>
              <Link href={`/gallery/`}>
              <img
                src={image.data().image}
                alt={`Gallery Image ${index + 1}`}
                className=" transition-transform duration-300 hover:scale-105 rounded p-3 w-full h-80 object-contain bg-white "
              /> 
              <div className="p-2 bg-white shadow-inner">
                <p className="text-gray-700 font-semibold ">{image.data().caption}</p>
                <p className="text-gray-500 text-xs ">
                  {image.data().date}
                </p>
              </div> 
              </Link>
              </div>
            
          ))}
        </div>
      )}
    </section>
  );
}
