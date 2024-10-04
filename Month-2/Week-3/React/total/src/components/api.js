import axios from 'axios'

const URL ='http://localhost:5000/posts';


//to Get all data(here it's posts)

export const getPost=()=>{
    return axios.get(URL);
};

//get a single post by ID
export const getPostById=(id)=>{
    return axios.get(`${URL}/${id}`);
}

//create a new post
export const createPost=(post)=>{
    return axios.post(URL,post);
};

//update a post by ID
export const updatePost=(id,updatedPost)=>{
    return axios.put(`${URL}/${id}`,updatedPost);
};

//Delete a post by ID
export const deletePost=(id)=>{
    // console.log(id)
    return axios.delete(`${URL}/${id}`);
};