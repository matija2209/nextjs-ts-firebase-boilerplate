import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../assets/product_phraser_logo.svg'

function Navbar() {
  const {loginGoogle,currentUser,logout} = useAuth()
  const handleLogin = ()=>loginGoogle()
  const handleLogout = ()=>logout()
  return (
    <nav className='h-16 bg-[#FFF9F3] border-b box-s shadow-md	'>
      <div className="container mx-auto grid h-full grid-cols-2">
        <Link href={"/"} className="self-center">
          <div className="flex gap-2">
            <Image alt="Perfect 5 — AI 5-a side" priority height={32} width={32} src={Logo}></Image>
            <h1 className='text-xl font-bold'>ProductPhraser</h1>
          </div>
        </Link>
        <button className="border-2 border-[#20B298]  w-max self-center px-2 py-1 rounded-xl justify-self-end text-[#20B298]" onClick={()=>{
          return currentUser ? handleLogout() : handleLogin()
        }}>{currentUser ? "Logout" : "Login"}</button>
      </div>
    </nav>
  )
}

export default Navbar