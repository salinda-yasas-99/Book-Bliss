package com.BookStore.BookBliss.Repository;


import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Integer> {

    Optional<Book> findByBookName(String bookName);
}
