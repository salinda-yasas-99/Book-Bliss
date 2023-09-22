package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reserve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reserveId;
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
    @JsonBackReference
    private User user;


    @ManyToMany(fetch =FetchType.LAZY,cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinTable(
            name = "reserve_book",
            joinColumns = {@JoinColumn(name = "reserveId")
            },
            inverseJoinColumns = {@JoinColumn(name = "bookId")}
    )
    private Set<Book> books=new HashSet<>();

    public void addBook(Book book){
        this.books.add(book);
        book.getReserves().add(this);
    }



}
