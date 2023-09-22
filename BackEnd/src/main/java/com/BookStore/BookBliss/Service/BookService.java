package com.BookStore.BookBliss.Service;
import com.BookStore.BookBliss.DTO.BookDTO;
import com.BookStore.BookBliss.DTO.ReserveDTO;
import com.BookStore.BookBliss.Entity.*;
import com.BookStore.BookBliss.Exception.BookAlreadyExistException;
import com.BookStore.BookBliss.Repository.*;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {
    private final CategoryRepository categoryRepository;
    private final SubCategoryRepository subCategoryRepository;
    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

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
        bookDTO.setLanguage(book.getLanguage());
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
