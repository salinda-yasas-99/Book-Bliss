package com.BookStore.BookBliss.Service;
import com.BookStore.BookBliss.DTO.BookDTO;
import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Category;
import com.BookStore.BookBliss.Entity.SubCategory;
import com.BookStore.BookBliss.Exception.BookAlreadyExistException;
import com.BookStore.BookBliss.Repository.BookRepository;
import com.BookStore.BookBliss.Repository.CategoryRepository;
import com.BookStore.BookBliss.Repository.SubCategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {

   /*
   const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Novel"},
    {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Mystery"},
    {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Adventure"},
    {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Grade 10"}];
    */
    private final BookRepository bookRepository;

    private final CategoryRepository categoryRepository;

    private final SubCategoryRepository subCategoryRepository;

    public List<BookDTO> getBooks() {
        List<Book> books = bookRepository.findAll();
        List<BookDTO> bookDTOs = books.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return bookDTOs;
    }

    private BookDTO convertToDTO(Book book) {
        BookDTO bookDTO = new BookDTO();
        bookDTO.setId(book.getBookId());
        bookDTO.setName(book.getBookName());
        bookDTO.setPrice(book.getPrice());
        bookDTO.setSource(book.getSource());
        bookDTO.setDesc(book.getDescription());
        bookDTO.setAuthor(book.getAuthor());
        bookDTO.setCategory(book.getCategory().getCategoryName());
        bookDTO.setSubCategory(book.getSubCategory().getSubCategoryName());
        return bookDTO;
    }

    public String addBook(BookDTO request){
        Optional<Book> existingBookOptional = bookRepository.findByBookName(request.getName());
        if (existingBookOptional.isPresent()) {
            /*Book existingBook = existingBookOptional.get();*/
            throw new BookAlreadyExistException("Book Already Exist");
        }

        else{
            Category category =categoryRepository.findByCategoryName(request.getCategory())
                    .orElseThrow(() -> new EntityNotFoundException("Category not found"));

            SubCategory subCategory =subCategoryRepository.findBySubCategoryName(request.getSubCategory())
                    .orElseThrow(()-> new EntityNotFoundException("Sub category not found"));

            var book= Book.builder()
                    .bookName(request.getName())
                    .price(request.getPrice())
                    .source(request.getSource())
                    .description(request.getDesc())
                    .author(request.getAuthor())
                    .category(category)
                    .subCategory(subCategory)
                    .build();
            bookRepository.save(book);
            return ("book is added");
        }

    }
}
