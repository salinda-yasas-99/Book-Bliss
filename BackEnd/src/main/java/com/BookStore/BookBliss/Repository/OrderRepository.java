package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Reserve,Integer> {

    @Query(value = "SELECT r FROM Reserve r WHERE r.user.userId = :userId AND r.reserveStatus = 'pending'")
    List<Reserve> findPendingOrdersByUserId(@Param("userId") Integer userId);
}
