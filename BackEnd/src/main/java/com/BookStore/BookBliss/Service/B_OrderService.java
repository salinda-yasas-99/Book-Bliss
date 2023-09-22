package com.BookStore.BookBliss.Service;


import com.BookStore.BookBliss.DTO.OrderItemDTo;
import com.BookStore.BookBliss.DTO.OrderRequestDTO;
import com.BookStore.BookBliss.Entity.*;
import com.BookStore.BookBliss.Repository.BookRepository;
import com.BookStore.BookBliss.Repository.CourierRepository;
import com.BookStore.BookBliss.Repository.OrderRepo;
import com.BookStore.BookBliss.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class B_OrderService {

        private final OrderRepo orderRepo;

        private final UserRepository userRepository;

        private final BookRepository bookRepository;

        private final CourierRepository courierRepository;


        /*public String placeOrder(OrderRequestDTO orderRequestDTO) {

            User user = userRepository.findByEmail(orderRequestDTO.getUsername())
                    .orElseThrow(() -> new IllegalArgumentException("User not found."));
            var newOrder = B_Order.builder()
                    .totalPrice(orderRequestDTO.getTotalPrice())
                    .orderItems(orderRequestDTO.getOrder_items())
                    .reserveStatus("Order Place")
                    .user(user)
                    .build();
            orderRepo.save(newOrder);
            return "OrderPlaced successfully";

        }*/

    /*old one

    public void createOrder(OrderRequestDTO orderRequestDTO) {

        // Find the user by username and set it in the order
        User user = userRepository.findByEmail(orderRequestDTO.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("User not found."));

        B_Order order = new B_Order();
        order.setTotalPrice(orderRequestDTO.getTotalPrice());
        order.setReserveStatus(orderRequestDTO.getReserveStatus());
        order.setUser(user);

        List<B_OrderItems> orderItemsList = new ArrayList<>();
        List<OrderItemDTo> orderItemDTOList = orderRequestDTO.getOrder_items(); // Get the list once to improve readability

        for (int i = 0; i < orderItemDTOList.size(); i++) {
            OrderItemDTo itemDTO = orderItemDTOList.get(i);

            B_OrderItems orderItem = new B_OrderItems();
            orderItem.setOrderQuantity(itemDTO.getBooktotal());

            // Find the book by ID and set it in the order item
            Book book = bookRepository.findById(itemDTO.getId()).orElse(null);
            if (book != null) {
                orderItem.setBook(book);
            } else {
                throw new IllegalArgumentException("Book not found");
            }

            orderItemsList.add(orderItem);
        }

        order.setOrderItems(orderItemsList); // Set the order items in the order entity


        // Save the order
        orderRepo.save(order);
    }*/

    public void createOrder(OrderRequestDTO orderRequestDTO) {

        // Find the user by username and set it in the order
        User user = userRepository.findByEmail(orderRequestDTO.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("User not found."));

        B_Order order = new B_Order();
        order.setTotalPrice(orderRequestDTO.getTotalPrice());
        order.setReserveStatus(orderRequestDTO.getReserveStatus());
        order.setOrderDate(orderRequestDTO.getOrderDate());
        order.setUser(user);


        Courier courier= new Courier();

        courier.setFirstName(orderRequestDTO.getFirstName());
        courier.setLastName(orderRequestDTO.getLastName());
        courier.setAddress(orderRequestDTO.getAddress());
        courier.setEmail(orderRequestDTO.getEmail());
        courier.setCity(orderRequestDTO.getCity());
        courier.setZip(orderRequestDTO.getZip());
        courier.setShippingCountry(orderRequestDTO.getShippingCountry());
        courier.setShippingOption(orderRequestDTO.getShippingOption());
        courier.setPrice(orderRequestDTO.getPrice());

        order.setCourier(courier);

        List<B_OrderItems> orderItemsList = new ArrayList<>();
        List<OrderItemDTo> orderItemDTOList = orderRequestDTO.getOrder_items(); // Get the list once to improve readability

        for (int i = 0; i < orderItemDTOList.size(); i++) {
            OrderItemDTo itemDTO = orderItemDTOList.get(i);

            B_OrderItems orderItem = new B_OrderItems();
            orderItem.setItemQuantity(itemDTO.getItemQuantity());
            orderItem.setItemSubtotal(itemDTO.getItemSubtotal());

            Book book = bookRepository.findById(itemDTO.getId()).orElse(null);
            if (book != null) {
                orderItem.setBook(book);
            } else {
                throw new IllegalArgumentException("Book not found");
            }

            orderItemsList.add(orderItem);
        }

        order.setOrderItems(orderItemsList); // Set the order items in the order entity


        // Save the order
        orderRepo.save(order);
    }




    public List<B_Order> getOrdersByUser(String username) {
         User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));

        return orderRepo.findByUser(user);
    }

    public B_Order getOrderById(Integer orderId) {
        // Use your repository to fetch the order by orderId
        Optional<B_Order> orderOptional = orderRepo.findById(orderId);

        // Check if the order exists in the database
        if (orderOptional.isPresent()) {
            return orderOptional.get();
        } else {
            // Return null or throw an exception as per your business logic
            // You can also consider returning an Optional<B_Order>
            return null;
        }
    }



}
