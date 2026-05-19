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
        toast.success('Data Added')
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

export const updateUserData = async (v,id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,{
        method: "PATCH",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.modifiedCount > 0){
        toast.success('Data Updated')
        redirect('/dashboard')
    }
    return data
}