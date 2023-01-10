import React from 'react'
import { motion } from "framer-motion"
import ExperianceCard from './ExperianceCard'

type Props = {}

export default function Workexperiance({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex flex-col relative h-screen overflow-hidden text-left md:flex-row max-w-full px-10  justify-evenly mx-auto items-center '>

            <h3 className=' absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Experiance</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory- mt-10 scrollbar
             scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
                <ExperianceCard />
                <ExperianceCard />
                <ExperianceCard />
                <ExperianceCard />
            </div>
        </motion.div>
    )
}