import React from 'react'

const data:{id:number,title:string,message:string}[] = [
    {
        id:1,
        title:"Save Time and Effort",
        message: "Say goodbye to spending hours rewriting product descriptions! Easily upload or paste your existing product descriptions and let AI do the rest. This frees up time for you to focus on other important tasks, such as marketing and sales."
    },{
        id:2,
        title:"Improve Accuracy and Consistency",
        message:"Generate accurate and consistent product descriptions that are tailored to your ecommerce’s style and voice. This helps you avoid errors or discrepancies in your product descriptions, which could lead to confusion or mistrust among potential customers."
    },{
        id:3,
        title:"Enhance SEO and Drive More Sales",
        message:"Get more traffic to your online store with high-quality product descriptions. Our SEO optimized product descriptions make it easier for customers to find your products online. This can lead to more sales and higher revenue for your business."
    }
]


function Advantagos() {
  return (
    <section id="advantages" className='grid text-center md:text-left md:grid-cols-3 my-16 gap-6'>
        {data.map(a=>{
            return (
                <div key={a.id} id="advantage">
                    <h3 className='font-bold mb-2'>{a.title}</h3>
                    <p>{a.message}</p>
                </div>
            )
        })}
    </section>
  )
}

export default Advantagos