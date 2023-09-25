import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebbok from "@/public/assets/facebook.png"
import instagram from "@/public/assets/instagram.png"
import youtube from "@/public/assets/youtube.png"

function Footer() {
    return (
        <div className="bg-black text-[1.2vw] p-[2em]">
            <p className='text-white flex justify-center font-bold mb-[1em] text-[1.2em]'>Universal Rasikaas</p>
            <p className='break-all text-white flex justify-center'> 1246, 80 Feet Rd, 1st phase Girinagar, II Phase, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560085</p>
            <p className='break-all text-white flex justify-center mt-[0.4em]'>Phone : +91-99016 97711</p>
            <div className='flex justify-center mt-[1em]'>
                <Link href="https://m.facebook.com/Madhukar.photograph" target='_blank'>
                    <Image src={facebbok} />
                </Link>
                <Link href="https://www.instagram.com/universalrasikaas/?hl=en" target='_blank'>
                    <Image src={instagram} />
                </Link>
                <Link href="https://youtube.com/@universalrasikaas5829?si=lO3RT3NFzNPnyVo2" target='_blank'>
                    <Image src={youtube} />
                </Link>
            </div>
        </div>
    )
}

export default Footer