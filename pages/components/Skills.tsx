import React from 'react'
import SkillSet from './SkillSet'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <h3 className='absolute uppercase top-36 tracking-[3px] text-gray-500 text-sm mb-10 '>
                Hover over a skill for concurrency profecency
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
                <SkillSet />
            </div>
        </div>
        
    )
}