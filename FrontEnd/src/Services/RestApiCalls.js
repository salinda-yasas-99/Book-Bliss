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

export const getBooks = async () => {
    try {
        const response = await API.get("http://localhost:8080/api/v1/book-controller/books");
        console.log(response);
        return response.data; // assuming the data is in the 'data' property of the response
    } catch (err) {
        console.log("This is error", err);
    }
};

export const getCategories = async () => {
    try {
        const response = await API.get("http://localhost:8080/api/v1/cat-controller/categories");
        console.log(response);
        return response.data; // assuming the data is in the 'data' property of the response
    } catch (err) {
        console.log("This is error", err);
    }
};

export const getSubCategories = async () => {
    try {
        const response = await API.get("http://localhost:8080/api/v1/sub-controller/subCategories");
        console.log("this is category response",response.data);
        return response.data; // assuming the data is in the 'data' property of the response
    } catch (err) {
        console.log("This is error", err);
    }
};


export const saveNewOrder = async (order)=>{

    const currentDate = new Date();
    const Token = localStorage.getItem('token');
    const decodedToken = jwt_decode(Token);
    const loggedUser = decodedToken.sub;

    /*const dateAsString = currentDate.toString();
    console.log("This is string date ",dateAsString);*/

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateAsString = currentDate.toLocaleDateString(undefined, options);
    console.log("This is string date:", dateAsString);

    const orderItems = order.line_items.map(item => ({
        "id": item.bookId,
        "itemQuantity": item.quantity,
        "itemSubtotal": item.booktotal
    }));

    console.log("this is mapped orderline items",orderItems);

    const newOrder= {
            username: loggedUser,
            totalPrice: order.totalPayment,
            reserveStatus: "payment recieved",
            firstName:order.customer.firstname,
            lastName:order.customer.lastname,
            email:order.customer.email,
            address:order.shipping.street,
            orderDate: dateAsString,
            city: order.shipping.town_city,
            zip:order.shipping.postal_zip_code,
            shippingCountry:order.shipping.country,
            shippingOption:order.shippingType.shipping_method.type,
            price: order.shippingType.shipping_method.price,
            order_items: orderItems
        };


    console.log("This is axios order ",newOrder);

    const authAxios = axios.create({
        headers: {
            'Authorization': `Bearer ${Token}`
        },
        withCredentials: true
    });

        const url = `http://localhost:8080/api/v1/orders-controller/placeOrder`;
        try {
            const  response = authAxios.post(url,newOrder)
                .then(console.log)
                .catch(console.log);
            console.log("this is order post data ",response.data);

        }
        catch(err){
            console.error("This is error in order placing",err);
        }



}

export const getUserDetails = async ()=>{

    const Token = localStorage.getItem('token');
    const decodedToken = jwt_decode(Token);
    const loggedUser = decodedToken.sub;

    const authAxios = axios.create({
        headers: {
            'Authorization': `Bearer ${Token}`
        },
        withCredentials: true
    });
    /*const url = `http://localhost:8080/api/v1/user-controller/user/${loggedUser}`;*/
    try {
        const response = await authAxios.get(`http://localhost:8080/api/v1/user-controller/user/${loggedUser}`);
        console.log("This is userdetails in axios",response.data);
        return response.data;

    }
    catch(err){
        console.error("This is error in order placing",err);
    }

}


export const getOrderDetails = async ()=>{

    const Token = localStorage.getItem('token');
    const decodedToken = jwt_decode(Token);
    const loggedUser = decodedToken.sub;

    const authAxios = axios.create({
        headers: {
            'Authorization': `Bearer ${Token}`
        },
        withCredentials: true
    });
    try {
        const response = await authAxios.get(`http://localhost:8080/api/v1/orders-controller/user/${loggedUser}`);
        console.log("This is orderdetails in axios",response.data);
        return response.data;

    }
    catch(err){
        console.error("This is error in order placing",err);
    }

}




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
