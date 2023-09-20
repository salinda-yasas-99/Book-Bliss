package com.BookStore.BookBliss.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    private Integer id;
    private String name;
    private BigDecimal price;
    private String source;
    private String desc;
    private String author;
    private String category;
    private String subCategory;

    /* const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Novel"},
    {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Mystery"},
    {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Adventure"},
    {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Grade 10"}];*/
}
