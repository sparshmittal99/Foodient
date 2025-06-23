package com.foodient.controller;

import com.foodient.dto.DonationReq;
import com.foodient.model.Donation;
import com.foodient.model.User;
import com.foodient.repository.DonationRepo;
import com.foodient.repository.UserRepo;
import com.foodient.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @Autowired private DonationRepo donationRepo;
    @Autowired private UserRepo userRepo;
    @Autowired private JwtUtil jwtUtil;

    @PostMapping
    public Donation donate(@RequestHeader("Authorization") String auth, @RequestBody DonationReq req) {
        String username = jwtUtil.extractUsername(auth.substring(7));
        User user = userRepo.findByUsername(username).orElseThrow();
        Donation d = new Donation();
        d.setDescription(req.getDescription());
        d.setQuantity(req.getQuantity());
        d.setDonor(user);
        return donationRepo.save(d);
    }

    @GetMapping
    public List<Donation> getMyDonations(@RequestHeader("Authorization") String auth) {
        String username = jwtUtil.extractUsername(auth.substring(7));
        User user = userRepo.findByUsername(username).orElseThrow();
        return donationRepo.findByDonor(user);
    }
}
