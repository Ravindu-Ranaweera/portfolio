import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    massage: string,
  };

type Props = {}

export default function Contact({ }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:inforanaweera@gmail.com?subject=${formData.subject}&
        body=hi,my name is ${formData.name}.${formData.massage} (${formData.email})`;
    };

    return (
        <div className='flex flex-col relative text-center h-screen md:text-left xl:flex-row px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>

            <div className=' flex flex-col space-y-10'>
                <h4 className='text-3xl font-semibold text-center'>I Have got what you need.
                    <span className=' underline decoration-[#F7AB0A]/50'> Let's Talk..</span>
                </h4>

                <div>
                    <div className='flex items-center space-x-5 justify-center mb-2 '>
                        <PhoneIcon className="text-[#f7ab0a] w-7 f-7 animate-pulse" />
                        <p className='text-xl'>+94 5507284</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center mb-2'>
                        <EnvelopeIcon className="text-[#f7ab0a] w-7 f-7 animate-pulse" />
                        <p className='text-xl'>inforanaweera@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center mb-2'>
                        <MapPinIcon className="text-[#f7ab0a] w-7 f-7 animate-pulse" />
                        <p className='text-xl'>Weligama, Matara, Sri Lanka.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className=' flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' flex space-x-2'>
                        <input {...register("name")} type="text" placeholder='Name' className='ci border-b px-6 py-2 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border--[#F7AB0A]/40' />
                        <input {...register("email")} type="email" placeholder='Email' className='ci border-b px-6 py-2 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border--[#F7AB0A]/40' />
                    </div>
                    <input {...register("subject")} type="text" placeholder='Subject' className='ci border-b px-6 py-2 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border--[#F7AB0A]/40' />

                    <textarea {...register("massage")} placeholder='Massage' className='ci border-b px-6 py-2 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border--[#F7AB0A]/40' ></textarea>
                    <button className=' bg-[#F7AB0A] px-5 py-3 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}