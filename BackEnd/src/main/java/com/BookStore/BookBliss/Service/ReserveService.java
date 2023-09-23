package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.DTO.ReserveDTO;
import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.ReserveBook;
import com.BookStore.BookBliss.Entity.User;
import com.BookStore.BookBliss.Repository.BookRepository;
import com.BookStore.BookBliss.Repository.ReserveBookRepository;
import com.BookStore.BookBliss.Repository.ReserveRepository;
import com.BookStore.BookBliss.Repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ReserveService {
    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final ReserveBookRepository reserveBookRepository;

    @Transactional
    public ReserveDTO addBookToOrder(String userName, Integer bookId){
        User user=userRepository.findByEmail(userName)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book not found."));
        List<Reserve> pendingReserves = reserveRepository.findAllByReserveStatusAndUser("pending",user);
        Reserve reserve;
        if (!pendingReserves.isEmpty()) {
            reserve = pendingReserves.get(0);
            reserve.setTotalQuantity(reserve.getTotalQuantity()+1);
            reserve.setTotalPrice(reserve.getTotalPrice().add(book.getPrice()));
        } else {
            reserve = new Reserve();
            reserve.setUser(user);
            reserve.setReserveStatus("pending");
            reserve.setTotalQuantity(1);
            reserve.setTotalPrice(book.getPrice());
            reserveRepository.save(reserve);
        }
//        reserve.addBook(book);
        ReserveBook reserveBook=new ReserveBook();
        reserveBook.setReserve(reserve);
        reserveBook.setBook(book);
        reserveBook.setQuantity(1);
        reserveBookRepository.save(reserveBook);
        reserveRepository.save(reserve);
        return convertToDTO(reserve);
    }

    private ReserveDTO convertToDTO (Reserve reserve){
        ReserveDTO reserveDTO = new ReserveDTO();
        reserveDTO.setReserveId(reserve.getReserveId());
        reserveDTO.setTotalQuantity(reserve.getTotalQuantity());
        reserveDTO.setTotalPrice(reserve.getTotalPrice());
        Set<Book> books= new HashSet<>();
        Set<ReserveBook> reserveBooks=reserveBookRepository.findAllByReserve(reserve);
        for(ReserveBook value:reserveBooks){
            books.add(value.getBook());
        }
        reserveDTO.setReservedBooks(books);
        reserveDTO.setReserveStatus(reserve.getReserveStatus());

        return reserveDTO;
    }

    @Transactional
    public ReserveDTO confirmReserve(String userName){
        User user=userRepository.findByEmail(userName)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
        List<Reserve> pendingReserves = reserveRepository.findAllByReserveStatusAndUser("pending",user);
        Reserve reserve=pendingReserves.get(0);
        reserve.setReserveStatus("confirmed");
        reserveRepository.save(reserve);
        return convertToDTO(reserve);

    }

    @Transactional
    public String increaseQuantity(Integer bookId,Integer reserveId){
        ReserveBook reserveBook=reserveBookRepository.findByBookAndReserve(bookRepository.findById(bookId),reserveRepository.findById(reserveId));
        reserveBook.setQuantity(reserveBook.getQuantity()+1);
        reserveBookRepository.save(reserveBook);

        return "Quantity Increased";
    }

    @Transactional
    public String decreaseQuantity(Integer bookId,Integer reserveId){
        ReserveBook reserveBook=reserveBookRepository.findByBookAndReserve(bookRepository.findById(bookId),reserveRepository.findById(reserveId));
        reserveBook.setQuantity(reserveBook.getQuantity()-1);
        reserveBookRepository.save(reserveBook);

        return "Quantity Decreased";
    }
}
