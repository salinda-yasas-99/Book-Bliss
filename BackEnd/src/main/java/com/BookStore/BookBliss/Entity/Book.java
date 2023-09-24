package com.BookStore.BookBliss.Entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookId;
    private String bookName;
    private BigDecimal price;
    private String source;
    @Column(length = 2000)
    private String description;
    private String author;
    private String language;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_category_id",referencedColumnName = "categoryId")
    @JsonBackReference
    private Category category;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_sub_category_id",referencedColumnName = "subCategoryId")
    @JsonBackReference
    private SubCategory subCategory;

//    @ManyToMany(fetch = FetchType.LAZY,
//            cascade = {
//                    CascadeType.PERSIST,
//                    CascadeType.MERGE
//            },
//            mappedBy = "books")
//    @JsonIgnore
//    private Set<Reserve> reserves;

    @OneToMany(mappedBy="book",cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<ReserveBook> reserveBooks=new HashSet<>();
}
