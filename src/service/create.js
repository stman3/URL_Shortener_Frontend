import axios from "axios"

const baseUrl = 'http://localhost:5000/api/url/shorten'


const create = async newObject => {
    const request = axios.post(baseUrl,newObject)
    const response = await request
    return response.data
}






export default create