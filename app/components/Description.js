import React from 'react'

export default function Description() {
  return (
    <section className="p-4 mt-20 lg:p-8  text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
			<img src="./group6.png" alt="" className=" bg-gray-500  md:h-80 aspect-auto " />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it&apos;s free</span>
				<h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse">
			<img src="./group7.png" alt="" className="md:h-80 bg-yellow-500  " />
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
