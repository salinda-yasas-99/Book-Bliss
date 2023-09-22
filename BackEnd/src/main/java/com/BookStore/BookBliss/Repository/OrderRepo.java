package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.B_Order;
import com.BookStore.BookBliss.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<B_Order,Integer> {
    List<B_Order> findByUser(User user);


}
