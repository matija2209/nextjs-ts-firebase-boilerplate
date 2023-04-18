import React, { useContext, useState } from 'react'
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import RotateIcon from '../assets/ai-description-change.svg'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import axios from 'axios';
import { delay, slowyPrintOut } from '@/utils/helpers';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useAuth } from '@/contexts/AuthContext';

const initialValues = {
}

const DemoContext = React.createContext<TDemoContext>(initialValues)

type HandleSubmit = <T>(data:T)=>void

function DemoSection() {
  const [results, setResults] = useState("")
  const [loading, setLoading] = useState(false)
  const [freeCounter, setFreeCounter] = useLocalStorage("desc_counter",0)

  const {currentUser} = useAuth()

  const maxTries = currentUser ? 50 : 15
  const handleOnSubmit:HandleSubmit = async (data:any)=>{
      setLoading(true)
      const results = await axios({url:"/api/desc",method:"post",data})
      setLoading(false)
      await slowyPrintOut({setText:setResults,text:results.data})
      setFreeCounter((c:number)=>c+1)
  }

  return (
    <DemoContext.Provider value={{handleOnSubmit,results,setResults,loading,setLoading,maxTries}}>
      <section id="product-demo" className="flex flex-col gap-2">
        <div className='grid h-max grid-cols-1 md:grid-cols-[1fr_minmax(5px,_0.1fr)_1fr] gap-4'>
          <InputBox></InputBox>
          <Image alt='Rotate icon' className='w-max self-center justify-self-center' src={RotateIcon}></Image>
          <OutputBox></OutputBox>
        </div>
        {freeCounter > maxTries && <Overlimit></Overlimit>}
      </section>
    </DemoContext.Provider>
  )
}

const Overlimit = ()=>{
  
  return (
    <div className='flex flex-row items-center m-auto gap-2 mt-4'>
      <Icon className='text-[#D06300]' icon="material-symbols:warning-rounded" />
      <p className='text-[#D06300]'>You have reached the limit. <a className='underline'>Sign up</a> for more.</p>
    </div>
  )
}

export default DemoSection

export const useDemoContext = ()=>{

  const context = useContext(DemoContext)
  if (context === undefined) {
      throw new Error("useTodoContext must be within AuthProvider")
  }
  return context

}