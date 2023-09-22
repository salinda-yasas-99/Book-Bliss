//package com.BookStore.BookBliss.Entity;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import jakarta.persistence.*;
//import lombok.*;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "reserve_book")
//public class ReserveBook {
//
//    @Id
//    @GeneratedValue(strategy=GenerationType.IDENTITY)
//    private Integer orderBookId;
//
//    @ManyToOne
//    @JoinColumn(name = "reserveId")
//    @JsonBackReference
//    private Reserve reserve;
//
//    @ManyToOne
//    @JoinColumn(name = "bookId")
//    @JsonBackReference
//    private Book book;
//
//    private Integer quantity;
//}
