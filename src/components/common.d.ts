interface TDesc {
    product_desc:string,
    tone:string,
    length:string,
    kwInclude:string,
    kwExclude:string
}

interface TDemoContext  {
    results?:string,
    handleOnSubmit?:any,
    loading?,
    setLoading?,
    maxTries?,
    setResults?:Function
}