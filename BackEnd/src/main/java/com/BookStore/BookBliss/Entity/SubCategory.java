package com.BookStore.BookBliss.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="subCategory")
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subCategoryId;
    private String subCategoryName;
    private String subCategoryDescription;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_category_id",referencedColumnName = "categoryId")
    @JsonBackReference
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_sub_category_id",referencedColumnName = "subCategoryId")
    @JsonManagedReference
    private Set<Book> books;
}
