import { classNames } from '@/utils/helpers'
import { Combobox } from '@headlessui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { UseFormHandleSubmit, useForm } from 'react-hook-form'
import { useDemoContext } from './DemoBox'
import useLocalStorage from '@/hooks/useLocalStorage'


function InputBox() {
    const [freeCounter, setFreeCounter] = useLocalStorage("desc_counter",0)
    const {maxTries} = useDemoContext()
    return (
        <div className='flex-grow p-6 relative bg-white rounded-lg'>
            <div className='absolute -translate-y-14 bold text-xl text-[#FF7A00]'>Try for free ({freeCounter}/{maxTries})</div>
            <DescriptionForm ></DescriptionForm>
        </div>
    )
}

export default InputBox



const DescriptionForm = ()=>{
    const [freeCounter, setFreeCounter] = useLocalStorage("desc_counter",0)
    const {maxTries} = useDemoContext()
    const {control,handleSubmit,register} = useForm()
    const {handleOnSubmit,results,setResults} = useDemoContext()
    const isDisabled =  freeCounter >= maxTries
    return (
        <form className='flex gap-4 flex-col' onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="flex flex-col">
                <label className='font-semibold' htmlFor="product_desc">Enter your original product description</label>
                <textarea disabled={isDisabled} {...register("product_desc")} placeholder='Your original product description....' className='p-2 mt-2 border rounded-md ' rows={5} name="product_desc" id="product_desc" ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className='flex flex-col' id="tone">
                    <label className='font-semibold' htmlFor="tone">Choose a tone</label>
                    <select disabled={isDisabled} {...register("tone")} className='border p-2 rounded-md' name="tone" id="tone" >
                        <option value="professional">Professional</option>
                        <option value="conversational">Conversational</option>
                        <option value="humorous">Humorous</option>
                        <option value="storytelling">Storytelling</option>
                        <option value="inspirational">Inspirational</option>
                        <option value="nostalgic">Nostalgic</option>
                        <option value="minimalist">Minimalist</option>
                    </select>

                </div>
                <div className='flex flex-col' id="length">
                    <label className='font-semibold' htmlFor="length">Target length in characters</label>
                    <input disabled={isDisabled} {...register("length")} className='border p-2 rou rounded-md' type="number" step={1} max={350} name="length" id="length" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className='font-semibold ' htmlFor="length">Keywords to include</label>
                <textarea disabled={isDisabled} {...register("kwInclude")} rows={1} className='border p-2 rou rounded-md' name="kwInclude" id="kw-include" />
            </div>
            
            {/* <div className="flex flex-col">
                <label className='font-semibold ' htmlFor="length">Keywords to exclude</label>
                <textarea {...register("kwExclude")}  rows={1} className='border p-2 rou rounded-md' name="kwExclude" id="kw-exclude" />
            </div> */}
            <button disabled={isDisabled} type='submit' className='rounded-xl bg-[#D06300] px-4 py-2 text-white w-max justify-self-end self-end ml-auto mr-0'>Create description</button>
            {/* <Example></Example> */}
        </form>
        )
}

// const people = [
//     { id: 1, name: 'Durward Reynolds' },
//     { id: 2, name: 'Kenton Towne' },
//     { id: 3, name: 'Therese Wunsch' },
//     { id: 4, name: 'Benedict Kessler' },
//     { id: 5, name: 'Katelyn Rohan' },
//   ]
  
//   function Example() {
//     const [selectedPeople, setSelectedPeople] = useState<any[]>([])
//     const [query, setQuery] = useState('')

//     const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) => {
//           return person.name.toLowerCase().includes(query.toLowerCase())
//         })

//     return (
//       <Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>
//         {({ activeOption }) => (
//         <>
//             <Combobox.Input 
//                 displayValue={(people) =>
//                     people.map((person) => person.name).join(', ')
//                 }
//                 className="bg-blue-400"
//                 onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Options>
//             {query.length > 0 && (
//                 <Combobox.Option value={{ id: null, name: query }}>
//                     Create "{query}"
//                 </Combobox.Option>
//             )}
//             {filteredPeople.map((person) => (
//                 <Combobox.Option key={person.id} value={person}>
//                     {({ active, selected }) => {
//                         return (
//                             <span className={classNames(
//                                 activeOption?.name  === person.name ? "bg-red-500" : null,
//                                 selected ? "bg-gray-200" : null
//                                 )}>{person.name}</span>   
//                         )
//                     }}
//                 </Combobox.Option>
//             ))}
//             </Combobox.Options>
//             {activeOption && (
//                 <div>The current active user is: {activeOption.name}</div>
//               )}
//         </>
//       )}
//       </Combobox>
//     )
//   }
  

  const Rocarop  = ({children,...rest}:any)=>{

    return (
        <div className='bg-red-500 h-36' {...rest}>{children}</div>
    )
  }