import axios from 'axios';
const API_URL = "http://localhost:8080";


export const uploadFile = async (data) => {
    try {
        const res = await axios.post(`${API_URL}/upload`,data)
        return res.data
    }
    catch (e) {
        console.log(e.message)
    }
}