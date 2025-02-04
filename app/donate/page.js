import React from 'react'

export const metadata = {
  title: "Support Dayboddho NGO - Donate to Make a Difference",
  description:
  "Contribute to Dayboddho’s mission to support needy students and communities. Your donation helps us provide educational resources, community programs, and essential aid to those in need.",
  keywords: [
  "Donate to Dayboddho",
  "Support NGO",
  "Charity Donations",
  "Help Needy Students",
  "Community Aid",
  "Non-Profit Contributions",
  "Educational Support Donations",
  "Social Impact Funding",
  "Volunteer Support",
  "Dayboddho Fundraising"
  ],
  openGraph: {
  title: "Donate to Dayboddho NGO - Empower Lives Through Your Support",
  description:
  "Make an impact by donating to Dayboddho. Your support helps us uplift communities and provide education to underprivileged students.",
  url: "https://dayboddho.vercel.app/donate",
  type: "website",
  images: [
  {
  url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
  alt: "Dayboddho Donation Page Featured Image"
  }
  ]
  },
  twitter: {
  card: "summary_large_image",
  title: "Support Dayboddho - Donate to Change Lives",
  description:
  "Your donation to Dayboddho makes a real difference. Help us provide educational opportunities and community support to those in need.",
  images: [
  {
  url: "https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png",
  alt: "Dayboddho Donation Key Image"
  }
  ]
  }
  };
export default function donate() {
  return (
    <section className="bg-gray-100 p-8 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        {/* Heading and Introduction */}
        <h1 className="text-3xl font-bengalifont text-left text-black mb-4">
          দান করুন - দায়বদ্ধ ওয়েলফেয়ার সোসাইটি
        </h1>
        <p className="text-gray-700 text-left mb-6">
          আমাদের সমাজের অসহায় ও দরিদ্র মানুষের পাশে দাঁড়াতে আপনার সহায়তা
          অপরিহার্য। ছোট ছোট দানে আমাদের সমাজে একটি বড় পরিবর্তন আনতে সক্ষম হবো।
          আমরা বিশ্বাস করি, একসাথে কাজ করলে সমাজের দুঃখ-কষ্ট দূর করতে পারব।
        </p>

        {/* Bank Details */}
        
          <h2 className="text-xl font-medium counterTitle mb-2">
            ব্যাংক তথ্যাবলী
          </h2>
          <div className='text-gray-700 mb-8 bg-gray-200 rounded p-3 shadow-inner'>
          <p>ব্যাংকের নাম: স্টেট ব্যাংক অফ ইন্ডিয়া</p>
          <p>অ্যাকাউন্ট নম্বর: 1234567890</p>
          <p>IFSC কোড: SBIN0001234</p>
          <p>শাখা: দিনহাটা</p>
          </div>
          
        

        {/* UPI QR Code */}
        <div className="text-left mb-6">
          <h2 className="text-lg font-medium counterTitle mb-2">
            আমাদের UPI QR কোড স্ক্যান করুন
          </h2>
          <img
            src="https://swamijitrust.com/media/qrchimpX1024.png" // replace with your actual QR code image path
            alt="UPI QR Code"
            className="w-40 h-40 ms-10 mb-4"
          />
          <p className="text-gray-600">
            অথবা নিচের লিঙ্ক থেকে সরাসরি UPI অ্যাপে যান:
          </p>
          <a
            href="upi://pay?pa=your-upi-id@upi&pn=DayboddhoWelfareSociety"
            className="text-blue-600 hover:underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            UPI অ্যাপে খুলুন
          </a>
        </div>

        {/* Beautiful Illustration */}
        <div className="mb-8 text-center">
          {/* <img
            src="./Christmas charity-bro.svg" // replace with your actual illustration path
            alt="Dayboddho Welfare Society Illustration"
            className="w-60 h-60 mx-auto"
          /> */}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            আপনার সহানুভূতি ও সহায়তার মাধ্যমে আমরা আরও অনেক মানুষের পাশে দাঁড়াতে পারব।
            দায়বদ্ধ ওয়েলফেয়ার সোসাইটির পাশে এসে দাঁড়ান এবং একটি ইতিবাচক পরিবর্তনের অংশ হোন।
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            এখনই দান করুন
          </button>
        </div>
      </div>
    </section>
  )
}
