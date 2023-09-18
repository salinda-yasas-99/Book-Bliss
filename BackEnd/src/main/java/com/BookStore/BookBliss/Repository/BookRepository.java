package com.BookStore.BookBliss.Repository;


import com.BookStore.BookBliss.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Integer> {
}
