
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai"

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const {tone,length,kwExclude,kwInclude,product_desc}:TDesc = req.body
    const assstant = ""
    const insructions = 
    `You are a copywriter and SEO specialist working for marketing agency. You will be given a product description, a tone of writing and words that must be included or excluded` +
    `\n\nRewrite it using ${tone} tone. New description should be around ${length} characters long. Exclude the following words: ${kwExclude} and include ${kwInclude} words.` +
    `\n\nHere is the description to rewrite:\n ${product_desc}\nGO`
    const response = await openAiMagic(insructions,assstant)
    res.send(response)
}


const openAiMagic = async(insructions:string,assstant:string) =>{
  const api_key = "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"
  const configuration = new Configuration({apiKey: api_key})
  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens:500,
    temperature:0.8,
    messages: [
      {role:"system",content:insructions},
      // {role:"assistant",content:assstant}
    ],
    })
    return completion?.data?.choices[0].message?.content
}