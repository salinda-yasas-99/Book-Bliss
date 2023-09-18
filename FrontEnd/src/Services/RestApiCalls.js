import axios from "axios";
const API = axios.create({
    baseURL:"http://localhost:8080/api/v1",
});


export const registerUser = async (userData) =>{
    try{
        const response = await API.post("/auth/register",userData);
        console.log(response);
        const { token} = response.data;
        console.log("this is token",token);
        localStorage.setItem('token', token);
        console.log("this is local storage token",localStorage.getItem('token'));

    }
    catch (error) {
        if (error.response) {
            // The request was made and the server responded with an error status code
            if (error.response.status === 409) {
                // Conflict status code (Email Already Exists)
                alert(error.response.data.message);
            } else {
                // Other error status codes
                console.error('Axios Error:', error);
                alert('An error occurred during registration.');
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from the server:', error.request);
            alert('No response received from the server. Please check your network connection.');
        } else {
            // Something happened in setting up the request
            console.error('Error setting up the request:', error.message);
            alert('Error setting up the request.');
        }
    }




}

