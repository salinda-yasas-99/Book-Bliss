package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
}
