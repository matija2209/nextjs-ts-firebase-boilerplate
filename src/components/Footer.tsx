import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/ai-lease-white-logo.svg'

function  Footer() {
  return (
    <footer className='h-40 bg-black'>
      <div className="container grid grid-cols-1 md:grid-cols-3 place-content-center h-full">
        <span></span>
        <div className="flex flex-col justify-center">
          <Link href={"/"} className="self-center">
            <div className="flex gap-2">
              <Image alt="AI Lease" priority src={Logo}></Image>
              <h1 className='text-xl  text-white font-bold'>App name</h1>
            </div>
          </Link>
        </div>
        <div className='justfy-self-end self-end'>
          <p className='text-white text-center md:text-right'>By <Link href="https://twitter.com/ziberna"  passHref target='_blank'  className='underline'>Matija</Link> & <Link passHref target='_blank'  href={"https://www.linkedin.com/in/katharina-pilz-719932130?originalSubdomain=at"} className='underline'>Kathi</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer