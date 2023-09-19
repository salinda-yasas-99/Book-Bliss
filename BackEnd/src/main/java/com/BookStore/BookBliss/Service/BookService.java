package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
}
