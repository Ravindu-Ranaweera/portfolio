import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import { Button } from 'semantic-ui-react';

type Props = {}

export default function Hero({ }: Props) {

    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img className=' relative rounded-full h-32 w-32 mx-auto object-cover' src='https://marketplace.canva.com/EAEeKH905XY/2/0/1600w/canva-yellow-and-black-gamer-grunge-twitch-profile-picture-Yf5RCMJroQI.jpg'></img>
            <div className='z-20'>
                <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about' >
                        <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transmition-all horver:border-[#F7AB0A]/40 text-[#F7AB0A]/40'>About</button>
                    </Link>
                    <Link href='#experiance' passHref={true}>
                        <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transmition-all horver:border-[#F7AB0A]/40 text-[#F7AB0A]/40'>Experiance</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transmition-all horver:border-[#F7AB0A]/40  text-[#F7AB0A]/40'>Skills</button>
                    </Link>
                    <Link href='#project'>
                        <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transmition-all horver:border-[#F7AB0A]/40  text-[#F7AB0A]/40'>Projects</button>
                    </Link>
                    <Link href='#contact'>
                        <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transmition-all horver:border-[#F7AB0A]/40  text-[#F7AB0A]/40'>Contacts</button>
                    </Link>
                </div>
            </div>

        </div>


    )
}