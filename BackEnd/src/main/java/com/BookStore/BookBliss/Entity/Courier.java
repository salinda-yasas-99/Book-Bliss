package com.BookStore.BookBliss.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="courier")
public class Courier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courierId;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String city;
    private String zip;
    private String shippingCountry;
    private String shippingOption;
    private float price;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_reserve_id")
    private Reserve reserve;
}
