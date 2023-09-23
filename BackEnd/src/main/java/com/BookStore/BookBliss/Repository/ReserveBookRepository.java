package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.ReserveBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface ReserveBookRepository extends JpaRepository<ReserveBook,Integer> {

//    List<ReserveBook> findAllByReserve(Reserve reserve);
    Set<ReserveBook> findAllByReserve(Reserve reserve);
    ReserveBook findByBookAndReserve(Optional<Book> book, Optional<Reserve> reserve);
}
