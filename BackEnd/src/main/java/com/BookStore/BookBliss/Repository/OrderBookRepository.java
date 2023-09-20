package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.OrderBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderBookRepository extends JpaRepository<OrderBook,Integer> {
}
