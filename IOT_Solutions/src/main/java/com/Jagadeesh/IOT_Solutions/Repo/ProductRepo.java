package com.Jagadeesh.IOT_Solutions.Repo;

import com.Jagadeesh.IOT_Solutions.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
}
