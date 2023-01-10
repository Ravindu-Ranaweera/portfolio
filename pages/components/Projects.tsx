import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='flex flex-col overflow-hidden h-screen relative text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>

                {projects.map((project, i) => (
                    <div className=' w-screen flex-shrink-0 flex flex-col snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true}}
                            className='xl:w-[200px]'
                            src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png " alt="" />
                        <div className=' space-y-10 px-0 md:px-10 mx-w-6xl'>
                            <h4 className=' text-semibold text-4xl'>
                                <span className=' underline decoration-[#F7AB0A]/50 '>Case study {i + 1} of {projects.length}</span> UPS Clone
                            </h4>
                            <p className=' text-center text-lg md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam commodi,
                                non ipsum magnam illum voluptatum libero repellat pariatur facilis ipsa dolore
                                fuga similique officiis nobis autem incidunt cupiditate doloremque? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Nisi maxime deleniti inventore unde
                                optio reprehenderit distinctio quis earum tempore a! Et officia porro impedit
                                voluptatum praesentium architecto illum labore laudantium!</p>
                        </div>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}