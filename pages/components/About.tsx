import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({ }: Props) {
    return (
        <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h1 className=' absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>About</h1>

            <motion.img
                initial={{ x: -200, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                src='https://marketplace.canva.com/EAEeKH905XY/2/0/1600w/canva-yellow-and-black-gamer-grunge-twitch-profile-picture-Yf5RCMJroQI.jpg'
                className=' -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-1- px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is little backgrounnd</h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Aspernatur laboriosam voluptatibus distinctio magni dolor. Fugiat accusantium 
                quas ipsa aspernatur temporibus unde dignissimos asperiores labore reiciendis 
                pariatur, sunt aperiam, dolor nam. Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Officiis quam facilis harum, eaque neque cumque, amet ab debitis veniam illo culpa 
                aut, rerum repellendus animi at sapiente accusamus. Nihil, ipsum!  Lorem, ipsum dolor 
                sit amet consectetur adipisicing elit. Sequi temporibus, ducimus delectus eligendi aut 
                quibusdam corrupti saepe, provident ipsum aspernatur aperiam nam cumque architecto libero 
                animi fuga porro repellat vitae. </p>
            </div>
        </div>
    )
}