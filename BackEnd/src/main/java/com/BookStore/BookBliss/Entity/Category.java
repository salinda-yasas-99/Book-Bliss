package com.BookStore.BookBliss.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;
    private String categoryName;
    private String categoryDescription;

    /*@OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_category_id",referencedColumnName = "categoryId")
    private List<SubCategory> subCategories;*/

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_category_id",referencedColumnName = "categoryId")
    private List<Book> books;


}
