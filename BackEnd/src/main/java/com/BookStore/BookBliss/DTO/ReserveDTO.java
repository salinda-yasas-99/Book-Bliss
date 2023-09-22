package com.BookStore.BookBliss.DTO;

import com.BookStore.BookBliss.Entity.Book;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReserveDTO {
    private Integer reserveId;
    private String reserveStatus;
    private Integer totalQuantity;
    private BigDecimal totalPrice;
    private Set<Book> reservedBooks;
}
