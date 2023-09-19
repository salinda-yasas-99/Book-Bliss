package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookId;
    private String bookName;
    private BigDecimal price;
    private String source;
    private String description;
    private String author;
    private String language;
    private Integer quantity;

    @ManyToMany(mappedBy = "books",fetch=FetchType.LAZY)
    @JsonBackReference
    private List<Order> orders;
}
