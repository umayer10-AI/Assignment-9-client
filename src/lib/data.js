export const getData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`)
    return res.json()
}

export const getIdData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${id}`)
    return res.json()
}