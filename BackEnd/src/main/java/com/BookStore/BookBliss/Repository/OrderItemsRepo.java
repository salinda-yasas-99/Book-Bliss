package com.BookStore.BookBliss.Repository;



import com.BookStore.BookBliss.Entity.B_OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemsRepo extends JpaRepository<B_OrderItems,Integer> {
}
