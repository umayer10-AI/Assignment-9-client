import { json } from "better-auth"
import { redirect } from "next/navigation"

export const postData = async (v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        redirect('/dashboard')
    }
    return data
}

export const deleteBookingData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`)
    const data = await res.json()
    console.log(id)
    return data
}