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
public class OrderResponseDTO {
    private Integer orderID;
    private BigDecimal totalPrice;
    private String reserveStatus;
    private String username;
    private List<OrderItemDTo> orderItems;

}
