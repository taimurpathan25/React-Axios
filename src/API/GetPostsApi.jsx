import axios from 'axios'
    const API = axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    })


// Get Method 
export const getMethod = () => {
    return API.get("/posts");
}

// Delete Method
export const deleteMethod = (id) => {
    return API.delete(`/posts/${id}`)
}