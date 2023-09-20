package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.DTO.CourierDTO;
import com.BookStore.BookBliss.Entity.Courier;
import com.BookStore.BookBliss.Repository.CourierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class CourierService {

    private final CourierRepository courierRepository;

    public String addCourierDetails(CourierDTO courierDTO) {
        if (courierDTO == null) {
            return "CourierDTO is null";
        }

        var courierdetails = Courier.builder()
                .firstName(courierDTO.getFirstName())
                .lastName(courierDTO.getLastName())
                .city(courierDTO.getCity())
                .address(courierDTO.getAddress())
                .email(courierDTO.getEmail())
                .shippingCountry(courierDTO.getShippingCountry())
                .shippingOption(courierDTO.getShippingOption())
                .price(courierDTO.getPrice())
                .zip(courierDTO.getZip())
                .build();

        courierRepository.save(courierdetails);
        return "Shipping data submitted";
    }

}
