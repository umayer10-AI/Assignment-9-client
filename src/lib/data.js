export const getData = async(search) => {
    let res
    if(!search){
        res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`)
    }
    else{
        res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user?search=${search}`)
    }
    return res.json()
}

export const getIdData = async (id,token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}

export const getBookingData = async (token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}