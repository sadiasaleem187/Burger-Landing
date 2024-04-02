import React from 'react'
import Image from 'next/image'
interface Props{
    image:string,
    name:string,
    position:string
}
const TeamCards = ({image,name,position}:Props) => {
  return (
    <div>
        <Image src={image} alt={name} height={400} width={400} className='rounded-2xl mx-auto ' />
        <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>{name}</h1>
        <p className='mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 hover:bg-green-800 text-white mx-auto w-fit font-medium'>{position}</p>
        <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit architecto!</p>
    </div>
  )
}

export default TeamCards