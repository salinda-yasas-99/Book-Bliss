package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.DTO.ReserveDTO;
import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.User;
import com.BookStore.BookBliss.Repository.BookRepository;
import com.BookStore.BookBliss.Repository.ReserveRepository;
import com.BookStore.BookBliss.Repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ReserveService {
    private final ReserveRepository reserveRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Transactional
    public ReserveDTO placeOrder(Integer userId, Integer bookId) {
        User user = userRepository.findById(userId)
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
//            reserveRepository.save(reserve);
        }
//add the first book to cart
//        if(reserve.getBooks()==null){
//            List<Book> books=new ArrayList<>();
//            books.add(book);
//            reserve.setBooks(books);
//        }
//        else{
//            reserve.getBooks().add(book);
//        }
        reserveRepository.save(reserve);
        return convertToDTO(reserve);
    }

    private ReserveDTO convertToDTO (Reserve reserve){
        ReserveDTO reserveDTO = new ReserveDTO();
        reserveDTO.setReserveId(reserve.getId());
        reserveDTO.setTotalQuantity(reserve.getTotalQuantity());
        reserveDTO.setTotalPrice(reserve.getTotalPrice());
//        reserveDTO.setReservedBooks(reserve.getBooks());

        return reserveDTO;
    }
}
