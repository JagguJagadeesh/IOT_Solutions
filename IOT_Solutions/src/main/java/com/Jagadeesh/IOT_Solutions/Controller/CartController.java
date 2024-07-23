package com.Jagadeesh.IOT_Solutions.Controller;

import com.Jagadeesh.IOT_Solutions.Model.Cart;
import com.Jagadeesh.IOT_Solutions.Model.Product;
import com.Jagadeesh.IOT_Solutions.Repo.CartRepo;
import com.Jagadeesh.IOT_Solutions.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/iotsolutions/cart")
public class CartController {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private ProductRepo productRepo;

    @GetMapping
    private ResponseEntity<List<Cart>> cart() {
        return ResponseEntity.ok(cartRepo.findAll());
    }

    @PostMapping("/add")
    private ResponseEntity<String> addCart(@RequestParam Long id, @RequestParam int count) {
        Product product = productRepo.findById(id).get();
        Cart cart = new Cart();
        cart.setProduct(product);
        cart.setQuantity(count);
        cartRepo.save(cart);
        return ResponseEntity.ok("Successfully added cart to the cart");
    }

    @DeleteMapping
    private ResponseEntity<String> deleteCart(@RequestParam Long id) {
        cartRepo.deleteById(id);
        return ResponseEntity.ok("Successfully deleted cart from the cart");
    }

}
