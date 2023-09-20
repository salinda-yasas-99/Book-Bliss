package com.BookStore.BookBliss.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
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
    private Category category;
}
