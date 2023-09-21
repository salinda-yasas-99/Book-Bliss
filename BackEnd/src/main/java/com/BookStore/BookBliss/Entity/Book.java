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
@Builder
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
    @Column(length = 2000)
    private String description;
    private String author;
    private String language;

    @ManyToMany(mappedBy = "reservedBooks",fetch=FetchType.LAZY)
    @JsonBackReference
    private List<Reserve> reserves;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_category_id",referencedColumnName = "categoryId")
    private Category category;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_sub_category_id",referencedColumnName = "subCategoryId")
    private SubCategory subCategory;
}
