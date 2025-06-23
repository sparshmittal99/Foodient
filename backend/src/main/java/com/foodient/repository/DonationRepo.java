package com.foodient.repository;

import com.foodient.model.Donation;
import com.foodient.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonationRepo extends JpaRepository<Donation, Long> {
    List<Donation> findByDonor(User donor);
}
