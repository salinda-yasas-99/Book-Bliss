package com.BookStore.BookBliss.Controller;


import com.BookStore.BookBliss.DTO.CourierDTO;
import com.BookStore.BookBliss.Service.CatergoryService;
import com.BookStore.BookBliss.Service.CourierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/courier-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CourierController {

    private final CourierService courierService;

    @PostMapping("/addCourier")
    public ResponseEntity<String> addCourierDetails(@RequestBody CourierDTO courierDTO){
        return ResponseEntity.ok(courierService.addCourierDetails(courierDTO));
    }

}
