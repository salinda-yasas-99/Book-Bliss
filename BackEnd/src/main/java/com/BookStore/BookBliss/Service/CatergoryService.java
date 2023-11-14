package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.DTO.CategoryDTO;
import com.BookStore.BookBliss.DTO.CourierDTO;
import com.BookStore.BookBliss.Entity.Category;
import com.BookStore.BookBliss.Exception.CategoryAlreadyExistsException;
import com.BookStore.BookBliss.Repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CatergoryService {

    private final CategoryRepository categoryRepository;
    public String  addCategory(CategoryDTO catAddRequest) {
        Optional<Category> existingCatOptional = categoryRepository.findByCategoryName(catAddRequest.getCategoryName());
        if(existingCatOptional.isPresent()){
            throw new CategoryAlreadyExistsException("Category name already added");
        }
        else {
            var category = Category.builder()
                    .categoryName(catAddRequest.getCategoryName())
                    .categoryDescription(catAddRequest.getCategoryDescription())
                    .categoryId(catAddRequest.getCategoryId())
                    .build();
            categoryRepository.save(category);
            return ("Category is added");
        }
    }


    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return categoryDTOS;
    }

    private CategoryDTO convertToDTO(Category category){
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCategoryId(category.getCategoryId());
        categoryDTO.setCategoryName(category.getCategoryName());
        categoryDTO.setCategoryDescription(category.getCategoryDescription());
        return  categoryDTO;
    }


}
