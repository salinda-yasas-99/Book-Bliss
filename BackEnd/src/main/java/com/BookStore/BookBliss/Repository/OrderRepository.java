package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {

    @Query("SELECT o FROM Order o WHERE o.user.userId = :userId AND o.orderStatus = 'pending'")
    List<Order> findPendingOrdersByUserId(@Param("userId") Integer userId);
}
