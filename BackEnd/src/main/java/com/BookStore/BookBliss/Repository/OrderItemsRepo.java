package com.BookStore.BookBliss.Repository;



import com.BookStore.BookBliss.Entity.OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemsRepo extends JpaRepository<OrderItems,Integer> {
}
