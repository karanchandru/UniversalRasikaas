import Image from 'next/image'
import React from 'react'
import logo from "@/public/assets/logo.png"

export default function About() {
    return (
        <div className='text-[1.5vw]'>
            <div className=' grid sm:grid-cols-1 sm:gap-[3em] md:grid-cols-2 md:gap-[3em] lg:grid-cols-4 lg:gap-[3em] p-[2em] break-words text-center justify-center '>
                <div>
                    <Image src={logo} />
                    <p className='text-[0.8em] mt-[1.5em]'>Customized Service</p>
                    <p className='text-[0.8em] mt-[1.5em]'>We believe that every client is unique, and so are their needs. Our services are tailor-made to suit your individual preferences and objectives.</p>
                </div>
                <div className=''>
                    <Image src={logo} />
                    <p className='text-[0.8em] mt-[1.5em]'>Customized Service</p>
                    <p className='text-[0.8em] mt-[1.5em]'>We believe that every client is unique, and so are their needs. Our services are tailor-made to suit your individual preferences and objectives.</p>
                </div>
                <div className=''>
                    <Image src={logo} />
                    <p className='text-[0.8em] mt-[1.5em]'>Customized Service</p>
                    <p className='text-[0.8em] mt-[1.5em]'>We believe that every client is unique, and so are their needs. Our services are tailor-made to suit your individual preferences and objectives.</p>
                </div>
                <div className=''>
                    <Image src={logo} />
                    <p className='text-[0.8em] mt-[1.5em]'>Customized Service</p>
                    <p className='text-[0.8em] mt-[1.5em]'>We believe that every client is unique, and so are their needs. Our services are tailor-made to suit your individual preferences and objectives.</p>
                </div>
            </div>
        </div>
    )
}
