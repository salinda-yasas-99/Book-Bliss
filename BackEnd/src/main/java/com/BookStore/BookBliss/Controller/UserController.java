package com.BookStore.BookBliss.Controller;



import com.BookStore.BookBliss.DTO.UserResponseDTO;
import com.BookStore.BookBliss.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @GetMapping("/user/{username}")
    public UserResponseDTO getUserDetails(@PathVariable String username){
        return userService.getUserDetails(username);

    }
}
