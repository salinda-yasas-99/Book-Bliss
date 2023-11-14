package com.BookStore.BookBliss.Repository;


import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.User;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Integer> {

    Optional<Book> findByBookName(String bookName);

}
