export const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  

export async function slowyPrintOut ({setText,text}:{setText:Function,text:string}){
  const messageLetters = text.split("")
      for (const l of messageLetters) {
        await delay(15)
        setText((p:string)=>p.concat(l))
      }
}