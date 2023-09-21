package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.DTO.ReserveDTO;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Service.ReserveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/order-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ReserveController {
    private final ReserveService reserveService;

    @PostMapping("/placeOrder/{userId}/{bookId}")
    public ReserveDTO placeOrder(@PathVariable Integer userId, @PathVariable Integer bookId) {
        return reserveService.placeOrder(userId, bookId);
    }
}
