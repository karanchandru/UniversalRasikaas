import Image from 'next/image'
import React from 'react'
import logo from "@/public/assets/logo.png"

export default function HomePageContent() {
    return (
        <div className="grid grid-cols-[60%,40%] items-center text-[1.5vw] p-[2em]">
            <div className=''>
                <h1 className='font-semibold text-[1.5em] flex justify-center'>Capturing Moments, Crafting Dreams</h1>
                <h5 className='mt-[1em] break-words text-[0.8em] '>
                    At Global Definition Group, we are your creative partners, dedicated to transforming your visions into reality. From individuals seeking to immortalize cherished moments to privately owned businesses and major brands aiming to make a statement, our expertise in photography, videography, and design services caters to diverse needs.
                </h5>
                {/* <h1 className='text-[1em] mt-[1.2em]'>Your Vision, Our Expertise</h1> */}
                <h5 className='mt-[0.5em] break-words text-[0.8em]'>
                    Every project we undertake is a collaboration, a fusion of your dreams and our creativity. Do you have a specific concept in mind, a fleeting idea waiting to be brought to life? Look no further. Our seasoned and innovative team is here to guide you through the creative process, ensuring your vision is not just realized but exceeds your expectations
                </h5>
            </div>
            <div>
                <Image src={logo} />
            </div>
        </div>
    )
}
