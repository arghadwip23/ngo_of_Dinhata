import React from 'react'

export default function Description() {
  return (
    <section className="p-4 mt-20 lg:p-8  text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-xl lg:flex-row">
			<img src="https://arghadwip23.github.io/image/Group6.png" alt="" className=" bg-gray-500  md:h-80 aspect-auto " />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				
				<h3 className="text-4xl counterTitle">আমরা কারা?</h3>
				<p className="my-6 dark:text-gray-600 text-lg">আমরা দিনহাটার কিছু স্বার্থহীন সমাজসেবক , মূলত পেশাগত ভাবে বেশির ভাগই শিক্ষক। নিজেদের কর্মসূত্রে আমরা এখানকার মানুষের আবশ্যকতা , দুর্বলতা এবং কিছু দরিদ্র গোষ্ঠীর অসহায়তার সাথে অবগত হওয়ায় সমাজে বদল আনার জন্য নিজেদের যোগদান দেওয়ার লক্ষ্যে আরো দৃঢ় হয় যায় । যার ফলস্বরূপ ২০২০ সালে দায়বদ্ধ ওয়েলফেয়ার সোসাইটির প্রতিস্থাপন করা হয়.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse">
			<img src="https://arghadwip23.github.io/image/Group7.png" alt="" className="md:h-80 bg-yellow-500  " />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<span className="text-xs uppercase text-gray-600">Join, it&apos;s free</span>
				<h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
				<p className="my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
			<img src="https://picsum.photos/900" alt="" className="h-80 bg-gray-500 aspect-video object-cover" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it&apos;s free</span>
				<h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
  )
}
