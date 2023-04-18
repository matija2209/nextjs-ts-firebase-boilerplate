import Head from 'next/head'
import { Inter } from 'next/font/google'
import React, {useState, Fragment, useContext, EventHandler } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")

  return (
    <>
      <Head>
        <title>App name</title>
        <meta name="description" content="Screen Your Rental Agreement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-b from-[#FFEFE0] to-white w-screen'>
        <div className='container mx-auto flex flex-col flex-grow'>
          <header className='text-center my-12 flex flex-col gap-4'>
            <h1 className='text-4xl md:text-5xl font-bold'>Revamp Your Product Descriptions with Ease</h1>
            <h3 className='text-md text-slate-600'>Boost Your Online Sales with our AI-Powered Product Description Rewriting Tool</h3>
            <button className='px-4 py-2 rounded-xl bg-[#FF7A00] text-white w-max m-auto'>Get started</button>
          </header>
        </div>
        {/* Page content */}
      </div>
    </>
  )
}

