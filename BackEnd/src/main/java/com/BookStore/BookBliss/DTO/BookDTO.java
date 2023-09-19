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
public class BookDTO {
    private Integer bookId;
    private String bookName;
    private BigDecimal price;
    private String source;
    private String description;
    private String author;
    private String language;
}
