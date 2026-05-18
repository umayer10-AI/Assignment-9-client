export const postData = async (v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    // console.log(v)
    return data
}