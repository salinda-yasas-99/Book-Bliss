package com.BookStore.BookBliss.Service;


import com.BookStore.BookBliss.DTO.SubCategoryDTO;
import com.BookStore.BookBliss.Entity.Category;
import com.BookStore.BookBliss.Entity.SubCategory;
import com.BookStore.BookBliss.Repository.CategoryRepository;
import com.BookStore.BookBliss.Repository.SubCategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;
    private final CategoryRepository categoryRepository;


    public String  addSubCategory(SubCategoryDTO subCategoryDTO) {

        Category category = categoryRepository.findById(subCategoryDTO.getFk_categoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));


        var subCategory = SubCategory.builder()
                    .subCategoryName(subCategoryDTO.getSubCategoryName())
                    .subCategoryDescription(subCategoryDTO.getSubCategoryDescription())
                    .category(category)
                    .build();
            subCategoryRepository.save(subCategory);
            return ("sub category is added");

    }

    public List<SubCategoryDTO> getAllSubCategories() {
        List<SubCategory> subCategories = subCategoryRepository.findAll();
        List<SubCategoryDTO> subCategoryDTOS = subCategories.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return subCategoryDTOS;

    }

    private SubCategoryDTO convertToDTO(SubCategory subCategory){
        SubCategoryDTO subCategoryDTO = new SubCategoryDTO();
        subCategoryDTO.setSubCategoryId(subCategory.getSubCategoryId());
        subCategoryDTO.setSubCategoryName(subCategory.getSubCategoryName());
        subCategoryDTO.setSubCategoryDescription(subCategory.getSubCategoryDescription());
        subCategoryDTO.setFk_categoryId(subCategoryDTO.getFk_categoryId());
        return  subCategoryDTO;
    }
}
