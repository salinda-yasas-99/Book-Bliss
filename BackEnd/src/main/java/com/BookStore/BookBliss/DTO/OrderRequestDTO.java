package com.BookStore.BookBliss.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
    private BigDecimal totalPrice;
    private String reserveStatus;
    private String username;
    private String orderDate;
    private List<OrderItemDTo> order_items;
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
