package com.foodient.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonationReq {
    private String description;
    private int quantity;
}
