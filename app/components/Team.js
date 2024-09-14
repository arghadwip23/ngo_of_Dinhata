'use client'
import React from 'react'
import { IKImage } from 'imagekitio-next'

export default function Team() {
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      <div className=' text-center '>
      <IKImage urlEndpoint={urlEndpoint}  className="object-cover w-24 h-24 mx-auto rounded-full shadow border border-red-950" path="TEAM/15.png" width={500} height={500} alt="image of president" />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-blue-500">Arpita Chakrobarty</p>
          <p className="mb-4 text-xs text-gray-400">President</p>
          <p className="text-sm tracking-wide text-gray-800">
            Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
            cuppa unhand me sir hadnt done it in donkeys years sods law.
          </p>
        </div>
      </div>
      <div className='text-center'>
      <IKImage urlEndpoint={urlEndpoint}  className="object-cover w-24 h-24 rounded-full shadow mx-auto" path="TEAM/3.png" width={500} height={500} alt="image of secretary" />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-blue-500">Asaduzzaman</p>
          <p className="mb-4 text-xs text-gray-400">secretary</p>
          <p className="text-sm tracking-wide text-gray-800">
            Secondary fermentation degrees plato units of bitterness, cask
            conditioned ale ibu real ale pint glass craft beer. krausen goblet
            grainy ibu.
          </p>
        </div>
      </div>
      <div className='text-center'>
      <IKImage urlEndpoint={urlEndpoint}  className="object-cover w-24 h-24 rounded-full shadow mx-auto" path="TEAM/1.png" width={500} height={500} alt="image of cashier" />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-blue-500">Manoranjan Barman</p>
          <p className="mb-4 text-xs text-gray-400">Cashier</p>
          <p className="text-sm tracking-wide text-gray-800">
            I just closed my eyes and in a nanosecond I cured myself from this
            ridiculous model of disease, addiction and obsession.
          </p>
        </div>
      </div>
      <div  className='text-center'>
      <IKImage urlEndpoint={urlEndpoint}  className="object-cover w-24 h-24 rounded-full shadow mx-auto" path="TEAM/17.png" width={500} height={500} alt="Alt text" />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold text-blue-500">Biplab Barman</p>
          <p className="mb-4 text-xs text-gray-400">Technical Crew</p>
          <p className="text-sm tracking-wide text-gray-800">
            Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
            Williamsburg sustainable aliqua, umami shabby chic artisan duis
            pickled.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
