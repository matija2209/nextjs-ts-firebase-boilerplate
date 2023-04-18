import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { useDemoContext } from './DemoBox';
import Spinzo from './Spinzo';
import useLocalStorage from '@/hooks/useLocalStorage';

function OutputBox() {
    const {handleOnSubmit,results,setResults,loading} = useDemoContext()
    const [copyBtnText, setCopyBtnText] = useState("Copy")


    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(results?results:"")
        setCopyBtnText("Copied")
        new Promise((res,rej) => setTimeout(()=>{setCopyBtnText("Copy");res}, 2000));

    }
  return (
    <div className='flex gap-2 flex-col flex-grow p-6 bg-white rounded-lg'>
        <label className='font-semibold' htmlFor="output">New Product Description</label>
        { loading ?  <div className='border rounded-xl grid place-content-center flex-grow'> <Spinzo loading={loading}></Spinzo> </div>: <textarea className='p-2 w-full border rounded-md border rounded-xl flex flex-grow flex-col' name="output" id="output" defaultValue={results} rows={5}></textarea>}
        <button onClick={handleCopyClipboard} className='mr-0 ml-auto rounded-xl p-2 border border-[#FF9B3F] w-max text-[#FF9B3F]'> <div className="flex gap-1"><Icon className='self-center text-[#FF7A00]' icon={"uil:copy"}></Icon>{copyBtnText}</div> </button>
    </div>
  )
}

export default OutputBox