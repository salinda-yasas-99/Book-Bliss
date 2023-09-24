package com.BookStore.BookBliss.Service;

import com.BookStore.BookBliss.DTO.CourierDTO;
import com.BookStore.BookBliss.Entity.Courier;
import com.BookStore.BookBliss.Repository.CourierRepository;
import com.BookStore.BookBliss.Repository.ReserveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class CourierService {

    private final CourierRepository courierRepository;
    private final ReserveRepository reserveRepository;

    public String addCourierDetails(CourierDTO courierDTO) {
        if (courierDTO == null) {
            return "CourierDTO is null";
        }

        var courierDetails = Courier.builder()
                .firstName(courierDTO.getFirstName())
                .lastName(courierDTO.getLastName())
                .city(courierDTO.getCity())
                .address(courierDTO.getAddress())
                .email(courierDTO.getEmail())
                .shippingCountry(courierDTO.getShippingCountry())
                .shippingOption(courierDTO.getShippingOption())
                .price(courierDTO.getPrice())
                .zip(courierDTO.getZip())
                .reserve(reserveRepository.findByReserveId(courierDTO.getReserveId()))
                .build();

        courierRepository.save(courierDetails);
        return "Shipping data submitted";
    }

}
