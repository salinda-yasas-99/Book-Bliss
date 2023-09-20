package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Reserve;
import com.BookStore.BookBliss.Entity.User;
import com.BookStore.BookBliss.Repository.BookRepository;
import com.BookStore.BookBliss.Repository.OrderRepository;
import com.BookStore.BookBliss.Repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Transactional
    public Reserve placeOrder(Integer userId, Integer bookId) {
        List<Reserve> pendingReserves = orderRepository.findPendingOrdersByUserId(userId);

        if (!pendingReserves.isEmpty()) {
            Reserve pendingReserve = pendingReserves.get(0);
            Book book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new IllegalArgumentException("Book not found."));

            pendingReserve.getOrderedBooks().add(book);
            return orderRepository.save(pendingReserve);
        } else {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found."));
            Book book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new IllegalArgumentException("Book not found."));

            Reserve newReserve = new Reserve();
            newReserve.setUser(user);
            newReserve.setReserveStatus("pending");
            newReserve.getOrderedBooks().add(book);

            return orderRepository.save(newReserve);
        }
    }
}
