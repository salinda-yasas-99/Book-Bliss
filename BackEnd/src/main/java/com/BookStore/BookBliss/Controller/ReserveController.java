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

    @PostMapping("/placeOrder/{userName}/{bookId}")
    public ResponseEntity<ReserveDTO> placeOrder(@PathVariable String userName, @PathVariable Integer bookId) {
        return ResponseEntity.ok(reserveService.addBookToOrder(userName, bookId));
    }

    @PostMapping("/confirmOrder/{userName}")
    public ResponseEntity<ReserveDTO> confirmOrder(@PathVariable String userName){
        return ResponseEntity.ok(reserveService.confirmReserve(userName));
    }

//    @PostMapping("/increaseBookCount/{bookId}")
}
