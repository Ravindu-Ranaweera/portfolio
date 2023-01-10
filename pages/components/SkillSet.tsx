import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}

export default function SkillSet({directionLeft}: Props) {
  return (
    <div className='group relative cursor-pointer flex'>
        <motion.img
        initial ={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0,}}
        src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
        className=' rounded-full border border-gray-500 object-cover w-24 h-24  md:w-28 md:h-28
        xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out' />
        <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className=' flex items-center justify-center h-full'>
                <p className=' text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}