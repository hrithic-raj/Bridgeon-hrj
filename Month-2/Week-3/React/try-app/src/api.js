import axios from 'axios'

const URL= 'http://localhost:5000/posts'

export const getPost=()=>{
    return axios.get(URL)
}

export const addPost=(post)=>{
    console.log(post)
    return axios.post(URL,post)
}

export const delPost=(id)=>{
    return axios.delete(`${URL}/${id}`)
}