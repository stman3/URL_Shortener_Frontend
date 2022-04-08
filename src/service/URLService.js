import axios from "axios"

const baseUrl = 'http://localhost:5000/api/url/shorten'


const createNewLink = async (longUrl) => {
    const request = await axios.post(baseUrl,{longUrl: longUrl})
    return request.data
}



export {
    createNewLink
}