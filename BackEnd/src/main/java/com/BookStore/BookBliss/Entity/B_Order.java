package com.BookStore.BookBliss.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="t_order")
public class B_Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private BigDecimal totalPrice;
    private String orderDate;
    private String reserveStatus;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_order_id", referencedColumnName = "orderId")
    private List<B_OrderItems> orderItems;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_user_id", referencedColumnName = "userId")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_courier_id")
    private Courier courier;
}


