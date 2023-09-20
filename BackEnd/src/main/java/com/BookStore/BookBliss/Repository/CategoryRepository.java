package com.BookStore.BookBliss.Repository;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
    Optional<Category> findByCategoryName(String catName);
}
