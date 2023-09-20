package com.BookStore.BookBliss.Controller;



import com.BookStore.BookBliss.DTO.CategoryDTO;
import com.BookStore.BookBliss.Service.CatergoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cat-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    private final CatergoryService catergoryService;

    @PostMapping()
    public ResponseEntity<String> addCategory(@RequestBody CategoryDTO catAddRequest){
        return ResponseEntity.ok(catergoryService.addCategory(catAddRequest));
    }


    @GetMapping()
    public List<CategoryDTO> getAllCategories(){
        return catergoryService.getAllCategories();
    }
}
