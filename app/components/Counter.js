import React from 'react'

export default function Counter() {
  return (
    <section className="  px-1 py-16 mt-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
    <div className="grid grid-cols-3  text-center gap-y-5 md:grid-cols-3 ">
      <div className="text-center flex flex-col ">
        <h6 className="text-3xl font-bold text-blue-500">
          144K
        </h6>
        <p className="font-bold text-gray-600">Downloads</p>
      </div>
      <div className="text-center">
        <h6 className="text-3xl font-bold text-blue-500">
          32.1K
        </h6>
        <p className="font-bold text-gray-600">Users</p>
      </div>
      <div className="text-center">
        <h6 className="text-3xl font-bold text-blue-500">
          12.9K
        </h6>
        <p className="font-bold text-gray-600">Subscribers</p>
      </div>
      
    </div>
  </section>
  )
}
