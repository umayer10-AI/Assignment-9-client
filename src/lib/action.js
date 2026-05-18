import { redirect } from "next/navigation"
import toast from "react-hot-toast"

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        toast.success('Data Deleted')
        redirect('/dashboard')
    }
    return data
}