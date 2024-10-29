'use client'
import {React,useEffect,useState} from 'react'
import app from '@/util/firebase'
import { getStorage,ref,getDownloadURL,listAll,getMetadata } from "firebase/storage";




export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const storage = getStorage(app)

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, "gallery"); // Specify 'gallery' folder
      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map(async (imageRef) =>{
           const url= await getDownloadURL(imageRef);
           const metadata = await getMetadata(imageRef);
           return{
            link:url,
            caption : metadata.customMetadata?.caption||"no caption",
            dateCreated:metadata.timeCreated? new Date(metadata.timeCreated).toLocaleDateString():"unknown",
           };
          })
        );
       
        var mytesting = getMetadata(ref(storage,'gallery/IMG-20231218-WA0017.jpg'));
        console.log(mytesting);
        
        setImageUrls(urls);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {imageUrls.map((image, index) => (
            <div>
              <img
                src={image.link}
                alt={`Gallery Image ${index + 1}`}
                className=" transition-transform duration-300 hover:scale-105 rounded shadow-lg "
              /> 
              <div className="p-2 bg-white shadow-inner">
                <p className="text-gray-700 font-semibold text-center">{image.caption}</p>
                <p className="text-gray-500 text-xs text-center">
                  {image.dateCreated}
                </p>
              </div> 
              </div>
            
          ))}
        </div>
      )}
    </section>
  );
}
