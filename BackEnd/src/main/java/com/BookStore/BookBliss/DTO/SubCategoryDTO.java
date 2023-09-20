package com.BookStore.BookBliss.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubCategoryDTO {

    private Integer subCategoryId;
    private String subCategoryName;
    private String subCategoryDescription;
    private Integer fk_categoryId;
}
