package com.Jagadeesh.IOT_Solutions.Repo;

import com.Jagadeesh.IOT_Solutions.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<Cart, Long> {
}
