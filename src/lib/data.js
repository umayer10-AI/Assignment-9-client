export const getData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`)
    return res.json()
}

export const getIdData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${id}`,{
        headers:{
            authorization: "logged in"
        }
    })
    return res.json()
}

export const getBookingData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`)
    return res.json()
}