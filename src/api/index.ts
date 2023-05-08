import axios from "axios"
import { useEffect, useState } from "react"

// const url = "https://api.adviceslip.com/advice"

export interface Quote {
    slip:{
        advice:string
        id:number
    }
}

const baseApi = axios.create({
    baseURL:"https://api.adviceslip.com",

})
export async function getQuotes() {
         const resp = await baseApi.get<Quote>("/advice")
            const  data =  await resp.data

    return{
        data
    } 
}


