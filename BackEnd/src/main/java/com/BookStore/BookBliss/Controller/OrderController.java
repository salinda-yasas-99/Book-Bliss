package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.Entity.Order;
import com.BookStore.BookBliss.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/order-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private OrderService orderService;

    @PostMapping("/placeOrder")
    public ResponseEntity<Order> placeOrder(@RequestParam Long userId, @RequestParam Long bookId) {
        Order order = orderService.placeOrder(userId, bookId);
        return ResponseEntity.ok(order);
    }
}
