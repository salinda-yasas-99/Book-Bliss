package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/order-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/placeOrder/{userId}/{bookId}")
    public ResponseEntity<Reserve> placeOrder(@PathVariable Integer userId, @PathVariable Integer bookId) {
        Reserve reserve =orderService.placeOrder(userId,bookId);
        return ResponseEntity.ok(reserve);
    }
}
