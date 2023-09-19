package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.DTO.BookDTO;
import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/book-controller")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class BookController {


    private final BookService bookService;

    @GetMapping("/book")

    public List<BookDTO> AllBooks(){
        return bookService.getBooks();
    }

    @PostMapping("/book")
    public ResponseEntity<String>addBook(
            @RequestBody BookDTO bookAddRequest
    ){
        return ResponseEntity.ok(bookService.addBook(bookAddRequest));
    }
}
