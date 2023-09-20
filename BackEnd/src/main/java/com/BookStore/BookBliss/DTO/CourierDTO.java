package com.BookStore.BookBliss.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
this is shippingdata in Paymentform {
"firstName":"Salinda",
"lastName":"Yasas",
"address":"142/1,Wewalduwa road, Kelaniya",
"email":"salindasym@gmail.com",
"city":"Kelaniya",
"zip":"11600",
"shippingCountry":"Angola",
"shippingOption":{"type":"Domestic","price":500}}
* */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourierDTO {
    private Integer courierId;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String city;
    private String zip;
    private String shippingCountry;
    private String shippingOption;
    private float price;
}
