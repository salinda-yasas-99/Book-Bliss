package com.BookStore.BookBliss.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
/*@CrossOrigin(origins = "*",allowedHeaders = "*")*/

public class DemoController {
    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String>sayHello(){
        return ResponseEntity.ok("Hello from Secured endpoint");
    }

   /* @GetMapping("/getHellow")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getHellow() {
        return "salinda";

    }*/
}


