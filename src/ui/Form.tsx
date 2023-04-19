import React from 'react'
import { useForm } from 'react-hook-form';

const FormContext = React.createContext<any>(null)

function Form({children,onSubmit}:{children:React.ReactNode,onSubmit:any}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <FormContext.Provider value={{register}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    </FormContext.Provider>
  )
}

Form.Input = function FormInput({name,placeholder}:{name:string,placeholder:string}) {
    const {register} = useFormContext()
    return (
        <input {...register(name)} placeholder={placeholder} />
    )
}

const useFormContext = ()=>{
    if (!React.useContext(FormContext)) {
        throw new Error('useFormContext must be used within a FormContext')
    }
    return React.useContext(FormContext)
}

export default Form