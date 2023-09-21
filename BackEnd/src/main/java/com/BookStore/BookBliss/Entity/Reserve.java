package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reserve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer totalQuantity;
    private BigDecimal totalPrice;
    private String reserveStatus;

    @OneToOne(mappedBy = "reserve")
    private Courier courier;

//    @ManyToMany(mappedBy = "reserves", cascade = CascadeType.ALL)
////    private List<Book> books=new ArrayList<>();
//    private List<Book> books;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;


    @ManyToMany(fetch =FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "order_book",
            joinColumns = {@JoinColumn(name = "reserveId",referencedColumnName="id")
            },
            inverseJoinColumns = {@JoinColumn(name = "bookId",referencedColumnName = "id")}
    )
    private List<Book> books;

}
