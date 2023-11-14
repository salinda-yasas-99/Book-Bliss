package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Category;
import com.BookStore.BookBliss.Entity.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubCategoryRepository extends JpaRepository<SubCategory,Integer> {
    Optional<SubCategory> findBySubCategoryName(String catName);
}
