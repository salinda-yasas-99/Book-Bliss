package com.BookStore.BookBliss.DTO;

import com.BookStore.BookBliss.Entity.Book;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReserveDTO {
    private Integer reserveId;
    private Integer totalQuantity;
    private BigDecimal totalPrice;
    private List<Book> reservedBooks;
}
