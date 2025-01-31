
'use client';
import React, { useState,useEffect } from 'react';
import supabase from '@/util/supabase';
import { Option } from 'lucide-react';

// Initialize Supabase client
//const supabase = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API);

export default function Upload({alt}) {
    const [file, setFile] = useState(null);
    const [addfolder, setAddfolder] = useState(false);
   // const [addingmode, setAddingmode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [foldees,setFoldrs] = useState([]);
    const [foldername,setFoldername] = useState(null);
    const [fol,setFol]= useState(null);
    const [folderdes,setFolderdes] = useState(null);
   
    useEffect(()=>{
       const getfolders = async()=>{
        const foldersreq =  await fetch("/api/folder/getfolder");
        const folders = await foldersreq.json();
        if(folders.ok){
        await setFoldrs(folders.data);
        //await console.log(foldees);
        // await console.log(folders.data);
        }else{
            await console.log("something went wrong");
            
        }
        
       } 
       getfolders();


    },[addfolder])

//handle done
const handleDone= async()=>{
    if(fol && folderdes){
    let newfolder = {foldername : fol,
        folderdescription: folderdes,

    }
    let a = await fetch("/api/folder/addfolder",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(newfolder)
       });
    let result= await a.json();
    if(result.ok){
        alt.success(result.message);
        setAddfolder(false);

    }else{
        alt.error(result.link);
        console.log(result);
        

    }


    }
}





    // Handle file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(foldername);
        
    };

    // Handle form submission
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file || !foldername) {
            alt.error("select folder and then upload the photo");
            return;
        }else{

        setLoading(true);
        setMessage('');

        try {
            // Upload the image file to Supabase Storage
            const fileName = `${Date.now()}-${file.name}`;
            const { data: storageData, error: storageError } = await supabase
                .storage
                .from('gallery')
                .upload(`gallery/${fileName}`, file);

            if (storageError) throw storageError;

            // Get the public URL of the uploaded image
            const { data: urlData } = await supabase
                .storage
                .from('gallery')
                .getPublicUrl(`gallery/${fileName}`);

            const imageUrl = urlData.publicUrl;
            await console.log(imageUrl);

            // Insert metadata into Supabase database
            const imdata={
                    folder_name :foldername,
                    image_url: imageUrl,
            }
            let a = await fetch("/api/upload",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body : JSON.stringify(imdata)
               });
            let result= await a.json();
            if (result.ok){
                // Success message and reset fields
            setMessage(result.message);
            setFile(null);
            //setCaption('');
           // setUploaderName('');
            alt.success("photo added to gallery successfully");

            }

            
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            alt.error("something went worng");
        } finally {
            setLoading(false);
        }
    }
    };

    return (
        
            <form onSubmit={handleUpload} className="mx-auto bg-white shadow-lg rounded p-6 w-full max-w-md text-black border ">
            <h1 className="text-xl text-center text-yellow-500 font-semibold mb-4">Upload Image</h1>
            <div className='mb-4'>
                select  the folder: <br />
                <select name="name" id="" className='border w-full border-black rounded p-2 text-black' onChange={(e)=>setFoldername(e.target.value)} disabled={addfolder}>
                    <option value={null}>select option</option>
                   {
                    foldees.map((folder,key)=>(<option value={folder.foldername} key={key} className='text-black'>{folder.foldername}</option>))
                   }
                   
                </select>
                <p className='text-gray-500 text-xs'>if you want to upload images of new event then create neew folder first for the event</p>
                <input type='button' className='bg-yellow-300 p-2 text-xs rounded cursor-pointer' onClick={()=>setAddfolder(true)}  value={"add folder"} />
                { addfolder && <div className=' p-4'> 
                    <label htmlFor="foldername">folder name</label>
                    <input type="text" className='border p-2 w-full  focus:outline-none rounded focus:ring focus:ring-yellow-200 mb-3' name='foldername' placeholder='enter the folder name' onChange={(e)=>setFol(e.target.value)} />

                    <label htmlFor="folderDescription">folder description</label>
                    <textarea name="folderDescription" className='w-full rounded border focus:outline-none focus:ring focus:ring-yellow-100' onChange={(e)=>setFolderdes(e.target.value)}></textarea>
                    <input type="button" value="done" className='bg-yellow-300 p-2 rounded text-xs cursor-pointer' onClick={handleDone} />
                    <input type="button" value="cancel" className='bg-red-500 p-2 mx-2 rounded text-xs cursor-pointer' onClick={()=>setAddfolder(false)} />


                </div>
                }
                
            </div>

               
               
                <div className='mb-4'>
                    <label className="block text-gray-700">Choose Image</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
                {message && <p className="text-center mt-4 text-gray-600">{message}</p>}
            </form>
        
    );
}
