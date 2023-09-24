package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Order;
import com.BookStore.BookBliss.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order,Integer> {
    List<Order> findByUser(User user);


}
