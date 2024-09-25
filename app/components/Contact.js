import React from 'react'

export default function Contact() {
  return (
   <section className='mt-10'>
    <div className="bg-yellow-50 font-[sans-serif] lg:h-screen">
            <div
                className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
                <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                    <h2 className="text-4xl font-extrabold text-gray-800">Get In Touch</h2>
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
                        experienced team is ready to engage with you.</p>

                    <form className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4 text-gray-800">
                        <input type='text' placeholder='Name'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"></textarea>
                        <button type='button'
                            className="text-gray-800 bg-yellow-300 hover:bg-yellow-400 font-semibold rounded-md text-sm px-6 py-3 block w-full">Send
                            Message</button>
                    </form>
                </div>

                <div className="z-10 relative lg:col-span-2">
                    <img src="https://readymadeui.com/images/analtsis.webp" className="w-3/4 object-contain block mx-auto" />
                </div>
            </div>
        </div>
   </section>
  )
}
