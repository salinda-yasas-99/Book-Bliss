import axios from "axios";
import jwt_decode from "jwt-decode";


const API = axios.create({
    baseURL:"http://localhost:8080/api/v1",
});

export default API;


export const registerUser = async (userData) =>{
    try{
        const response = await API.post("/auth/register",userData);
        //console.log(response);
        const  {token} = response.data;
        //console.log("this is signup token",token);
        localStorage.setItem('token', token);
        const decodedToken = jwt_decode(token);
       // console.log("this is signup local storage token",localStorage.getItem('token'));
        //console.log("this is decoded token",decodedToken);
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

        }
    }

}

export const logUser = async (user) =>{
    try {

        // Send a request to the server to log the user in using the JWT token
        const response = await API.post('http://localhost:8080/api/v1/auth/authenticate',user);
        const  {token} = response.data;
        console.log("this is login token",token);
        localStorage.setItem('token', token);
        console.log("this is login local storage token",localStorage.getItem('token'));
        const decodedToken =jwt_decode(JSON.stringify(token));
        console.log("this is decoded token",decodedToken);
        window.location.href = 'http://localhost:3000';


    } catch (error) {
        if (error.response.status === 403) {
            // email or password wrong
            alert(error.response.data.message);
        }
        else if (error.response) {
            // Handle server response errors, if any
            console.error('Axios Error:', error);
            alert('An error occurred during login.');
        } else if (error.request) {
            // Handle the case where the request was made but no response was received
            console.error('No response received from the server:', error.request);
            alert('No response received from the server. Please check your network connection.');
        } else {
            console.error('Error setting up the request:', error.message);
        }
    }

}

/*
*  const testEndpoint = async () => {
        try{
            const  response = authAxios.get("http://localhost:8080/api/v1/book-controller/book")
                .then(console.log)
                .catch(console.log);
            console.log("this is demo data ",response.data);

        }
        catch(err){
            console.error("This is error ",err);
        }
    };
* */

export const getBooks = async () => {
    try {
        const response = await API.get("http://localhost:8080/api/v1/book-controller/books");
        console.log(response);
        return response.data; // assuming the data is in the 'data' property of the response
    } catch (err) {
        console.log("This is error", err);
    }
};


/*export const getBooks =async () =>{
    try{
        const response = await API.get("http://localhost:8080/api/v1/book-controller/books")
            .then(console.log)
            .catch(console.log);
    }
    catch (err){
        console.log("This is error", err);
    }

};*/
