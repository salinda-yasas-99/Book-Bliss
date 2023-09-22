package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReserveRepository extends JpaRepository<Reserve,Integer> {

//    @Query(value = "SELECT r FROM Reserve r WHERE r.user.userId = :userId AND r.reserveStatus = 'pending'")
//    List<Reserve> findPendingOrdersByUserId(@Param("userId") Integer userId);
    List<Reserve> findAllByReserveStatusAndUser(String reserveStatus, User user);

}
