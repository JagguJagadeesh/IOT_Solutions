package com.Jagadeesh.IOT_Solutions.Controller;

import com.Jagadeesh.IOT_Solutions.Model.Product;
import com.Jagadeesh.IOT_Solutions.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/iotsolutions/products")
public class ProductController {

    @Autowired
    private ProductRepo productRepo;

    @GetMapping
    private ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepo.findAll());
    }

    @GetMapping("/{id}")
    private ResponseEntity<Product> getProductById(@PathVariable long id) throws Exception {
        return ResponseEntity.ok(productRepo.findById(id).orElseThrow(() -> new Exception("Product not found")));
    }


}
