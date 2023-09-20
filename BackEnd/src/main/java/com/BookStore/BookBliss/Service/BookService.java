package com.BookStore.BookBliss.Service;
import com.BookStore.BookBliss.DTO.BookDTO;
import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.User;
import com.BookStore.BookBliss.Exception.EmailAlreadyExistException;
import com.BookStore.BookBliss.Repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {
    @Autowired
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
        bookDTO.setBookId(book.getBookId());
        bookDTO.setBookName(book.getBookName());
        bookDTO.setPrice(book.getPrice());
        bookDTO.setSource(book.getSource());
        bookDTO.setDescription(book.getDescription());
        bookDTO.setAuthor(book.getAuthor());
        bookDTO.setLanguage(book.getLanguage());
        return bookDTO;
    }

    public String addBook(BookDTO request){
        Optional<Book> existingBookOptional = bookRepository.findByBookName(request.getBookName());
        if (existingBookOptional.isPresent()) {
            /*Book existingBook = existingBookOptional.get();*/
            throw new EmailAlreadyExistException("Book Already Exist");
        }
        else{
            var book= Book.builder()
                    .bookName(request.getBookName())
                    .price(request.getPrice())
                    .source(request.getSource())
                    .description(request.getDescription())
                    .author(request.getAuthor())
                    .language(request.getLanguage())
                    .build();
            bookRepository.save(book);
            return ("book is added");
        }

    }
}
