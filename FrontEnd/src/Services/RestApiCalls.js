import axios from "axios";
const API = axios.create({
    baseURL:"http://localhost:8080/api/v1",
});


export const registerUser = async (userData) =>{
    try{
        const response = await API.post("/auth/register",userData);
        console.log(response);
        const { token} = response.data;
        console.log("this is signup token",token);
        localStorage.setItem('token', token);
        console.log("this is signup local storage token",localStorage.getItem('token'));
        window.location.href = 'http://localhost:3000';

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

export const logUser = async (user) =>{
    try {

        // Send a request to the server to log the user in using the JWT token
        const response = await API.post('http://localhost:8080/api/v1/auth/authenticate',user);
        const { token} = response.data;
        console.log("this is login token",token);
        localStorage.setItem('token', token);
        console.log("this is login local storage token",localStorage.getItem('token'));
        window.location.href = 'http://localhost:3000';


    } catch (error) {
        if (error.response) {
            // Handle server response errors, if any
            console.error('Axios Error:', error);
            alert('An error occurred during login.');
        } else if (error.request) {
            // Handle the case where the request was made but no response was received
            console.error('No response received from the server:', error.request);
            alert('No response received from the server. Please check your network connection.');
        } else {
            console.error('Error setting up the request:', error.message);
            alert('Error setting up the request.');
        }
    }

}

