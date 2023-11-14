package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.DTO.BookDTO;
import com.BookStore.BookBliss.DTO.ReserveDTO;
import com.BookStore.BookBliss.Service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/book-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {


    private final BookService bookService;

    @GetMapping("/books")
    public List<BookDTO> AllBooks(){
        return bookService.getBooks();
    }


    @PostMapping("/book")
    public ResponseEntity<String>addBook(
            @RequestBody BookDTO bookAddRequest
    ){
        return ResponseEntity.ok(bookService.addBook(bookAddRequest));
    }

//    @PostMapping("/placeOrder/{userId}/{bookId}")
//    public ReserveDTO placeOrder(@PathVariable Integer userId, @PathVariable Integer bookId) {
//        return bookService.addBookToOrder(userId, bookId);
//    }
}
