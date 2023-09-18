package com.BookStore.BookBliss.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="courier")
public class Courier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courierId;
    private String courierType;
    private String street;
    private String town;
    private String postalCode;
    private String country;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_order_id")
    private Order order;
}
