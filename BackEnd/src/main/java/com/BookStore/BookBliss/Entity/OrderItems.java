package com.BookStore.BookBliss.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="t_orderItems")
public class OrderItems {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_item_id;
    private Integer itemQuantity;
    private float itemSubtotal;


   /* @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_book_id",referencedColumnName = "bookId")
    private List<Book> books;*/

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "fk_book_id", referencedColumnName = "bookId") // Make sure 'id' matches the actual column name in the referenced entity
    private Book book;


}

