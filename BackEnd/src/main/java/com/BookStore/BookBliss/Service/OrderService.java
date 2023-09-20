package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.Entity.Book;
import com.BookStore.BookBliss.Entity.Order;
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
    private OrderRepository orderRepository;
    private UserRepository userRepository;
    private BookRepository bookRepository;

    @Transactional
    public Order placeOrder(Integer userId, Integer bookId) {
        List<Order> pendingOrders = orderRepository.findPendingOrdersByUserId(userId);

        if (!pendingOrders.isEmpty()) {
            Order pendingOrder = pendingOrders.get(0);
            Book book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new IllegalArgumentException("Book not found."));

            pendingOrder.getOrderedBooks().add(book);
            return orderRepository.save(pendingOrder);
        } else {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found."));
            Book book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new IllegalArgumentException("Book not found."));

            Order newOrder = new Order();
            newOrder.setUser(user);
            newOrder.setOrderStatus("pending");
            newOrder.getOrderedBooks().add(book);

            return orderRepository.save(newOrder);
        }
    }
}
