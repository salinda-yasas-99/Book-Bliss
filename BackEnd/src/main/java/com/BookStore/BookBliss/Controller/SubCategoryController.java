package com.BookStore.BookBliss.Controller;

import com.BookStore.BookBliss.DTO.SubCategoryDTO;
import com.BookStore.BookBliss.Service.SubCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sub-controller")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SubCategoryController {

    private final SubCategoryService subCategoryService;

    @PostMapping()
    public ResponseEntity<String> addSubCategory(@RequestBody SubCategoryDTO subCategoryDTO){
        return ResponseEntity.ok(subCategoryService.addSubCategory(subCategoryDTO));
    }

    @GetMapping("/subCategories")
    public List<SubCategoryDTO> getAllSubCategories(){
        return subCategoryService.getAllSubCategories();
    }
}
