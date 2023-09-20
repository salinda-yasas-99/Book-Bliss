package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="reserve")
public class Reserve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reserveId;
    private Integer totalQuantity;
    private BigDecimal totalPrice;
    private String reserveStatus;

    @OneToOne(mappedBy = "reserve")
    private Courier courier;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name = "reserveBook",
    joinColumns = {
            @JoinColumn(name = "reserveId",referencedColumnName = "reserveId")
    },
    inverseJoinColumns = {
            @JoinColumn(name = "bookId",referencedColumnName = "bookId")
    }
    )
    @JsonManagedReference
    private List<Book> reservedBooks = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public List<Book> getOrderedBooks() {

        return reservedBooks;
    }
}
