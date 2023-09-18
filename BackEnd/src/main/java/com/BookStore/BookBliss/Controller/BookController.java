package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/book-controller")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> AllBooks(){
        return bookService.getBooks();
    }
}
