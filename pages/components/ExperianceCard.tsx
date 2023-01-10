import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperianceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-15 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{duration: 1.2}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='rounded-full h-32 w-32 xl:w-[150px] xl:h-[150px] object-cover object-center'
                src='https://marketplace.canva.com/EAEeKH905XY/2/0/1600w/canva-yellow-and-black-gamer-grunge-twitch-profile-picture-Yf5RCMJroQI.jpg'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>Ceo Epta plus</h4>
                <p className='font-bold text-2xl mt-1'>papafam</p>
                <div className=' flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src='https://cdn-icons-png.flaticon.com/512/226/226777.png' />
                    <img className='h-10 w-10 rounded-full'
                        src='https://cdn-icons-png.flaticon.com/512/226/226777.png' />
                    <img className='h-10 w-10 rounded-full'
                        src='https://cdn-icons-png.flaticon.com/512/226/226777.png' />

                </div>
                <p className=' uppercase text-gray-300 py-5'>Started work,.... , ended..</p>
                <ul className=' list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary point</li>
                    <li>Summary point</li>
                </ul>
            </div>
        </article>
    )
}