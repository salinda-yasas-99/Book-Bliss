package com.BookStore.BookBliss.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDTo {
    private Integer id; // This should correspond to the book ID
    private Integer itemQuantity;
    private float itemSubtotal;
}
