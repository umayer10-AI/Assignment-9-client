import { redirect } from "next/navigation"
import toast from "react-hot-toast"

export const postData = async (v,t) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
        method: "POST",
        headers: {
            'content-type' : 'application/json',
            authorization: `Bearer ${t?.token}`
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success('Booking Confirm Successfully')
        redirect('/dashboard')
    }
    return data
}

export const deleteBookingData = async (id,t) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,{
        method: "DELETE",
        headers:{

            authorization: `Bearer ${t?.token}`
            
        }
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        toast.success('Data Deleted')
        redirect('/dashboard')
    }
    return data
}

export const updateUserData = async (v,id,t) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,{
        method: "PATCH",
        headers:{
            'content-type':"application/json",
            authorization: `Bearer ${t?.token}`
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.modifiedCount > 0){
        toast.success('Booking Updated')
        redirect('/dashboard')
    }
    return data
}