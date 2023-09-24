package com.BookStore.BookBliss.Controller;


import com.BookStore.BookBliss.DTO.OrderRequestDTO;
import com.BookStore.BookBliss.Entity.Order;
import com.BookStore.BookBliss.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderService _orderService;


    /*@PostMapping("/placeOrder")
    public ResponseEntity<String>placeOrder( @RequestBody OrderRequestDTO orderRequestDTO) {
        String response =b_orderService.placeOrder(orderRequestDTO);
        return ResponseEntity.ok(response);
    }*/

    @PostMapping("/placeOrder")
    public ResponseEntity<?> createOrder(@RequestBody OrderRequestDTO orderRequestDTO) {
        try {
            // Call the service method to save the order
            _orderService.createOrder(orderRequestDTO);
            return ResponseEntity.ok("Order created successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating the order: " + e.getMessage());
        }
    }

    /*@GetMapping("/user/{username}")
    public ResponseEntity<List<B_Order>> getOrdersByUser(@PathVariable String username) {
        List<B_Order> orders = b_orderService.getOrdersByUser(username);
        return ResponseEntity.ok(orders);
    }*/
    @GetMapping("/user/{username}")
    public ResponseEntity<?> getOrdersByUser(@PathVariable String username) {
        try {
            List<Order> orders = _orderService.getOrdersByUser(username);
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            // Handle the exception and return an error response
            String errorMessage = "An error occurred while fetching orders for user: " + username;
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<?> getOrderById(@PathVariable Integer orderId) {
        try {
            Order order = _orderService.getOrderById(orderId);
            if (order != null) {
                return ResponseEntity.ok(order);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order not found.");
            }
        } catch (Exception e) {
            // Handle the exception and return an error response
            String errorMessage = "An error occurred while fetching the order with ID: " + orderId;
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }



}

