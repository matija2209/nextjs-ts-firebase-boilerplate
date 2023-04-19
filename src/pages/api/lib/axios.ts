import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type MakeApiRequest = <T = any>(endpoint:string,opts:AxiosRequestConfig)=>Promise<AxiosResponse<T>>
export const makeApiOneRequest:MakeApiRequest = async (endpoint,opts) => {
    
    if (!endpoint) throw new Error("No endpoint provided in the request!");
    
    const fullUrl = process.env.NODE_ENV === 'development' ? 
        `/api/${endpoint}` 
        : 
        `/api/${endpoint}`
    
    const config:AxiosRequestConfig = {
        url:fullUrl,
        withCredentials:true,
        headers:{
            'Authorization': 'Bearer ' //+ accessToken,
        },
        method:opts?.method ? opts.method : "get",
        ...opts
    }
    try {
        const response = await axios(config);
        return response;
    } catch (err:any){
        const errorName = err.response?.data?.name ?? "Unknown Error"
        const errorMessage = err.response?.data?.message ?? "Cannot provide any details at this time. Please try again later."
        throw Error()
        // if (errorName === "TokenExpired" || errorName === "auth/id-token-expired" || errorName === "UserDoesNotExist" ||errorName === "NoUserFound") {
        //     return await signUserOut()
        // }
        // if (err.message === 'Request failed with status code 404') {
        //     throw new ErrorOnAPI({message:"Endpoint not found on API server",name:err.code,status:400})
        // }
        // if (err?.message === 'Network Error') {
        //     throw new ErrorOnAPI({name:"AxiosError",message:"API server is currently offline. Please check again later or contact support. Sorry for inconvenience.",status:500})
        // }
        // const {data:{name,message},status} = err.response        
        // throw new ErrorOnAPI(err)
    }
};
