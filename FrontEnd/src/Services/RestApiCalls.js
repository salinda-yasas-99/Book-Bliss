import axios from "axios";


const API = axios.create({
    baseURL:"http://localhost:8080/api/v1",
});


export const registerUser = async (userData) =>{
    try{
        const response = await API.post("/auth/register",userData);
        const { token} = response.data;
        console.log("this is token",token);
        localStorage.setItem('token', token);

    }
    catch (error){
        throw error;
    };




}

