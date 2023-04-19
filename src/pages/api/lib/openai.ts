
import { Configuration, OpenAIApi } from "openai"

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
