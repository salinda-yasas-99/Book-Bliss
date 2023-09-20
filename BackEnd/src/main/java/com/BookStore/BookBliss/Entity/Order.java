package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private Integer totalQuantity;
    private BigDecimal totalPrice;

    @OneToOne(mappedBy = "order")
    private Courier courier;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name = "orderBook",
    joinColumns = {
            @JoinColumn(name = "orderId",referencedColumnName = "orderId")
    },
    inverseJoinColumns = {
            @JoinColumn(name = "bookId",referencedColumnName = "bookId")
    }
    )
    @JsonManagedReference
    private List<Book> books;
}
