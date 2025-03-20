package org.dnyanyog.controller;


import org.dnyanyog.dto.AddProductRequest;
import org.dnyanyog.dto.AddProductResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductControler {
    
    @PostMapping("/add")
    public AddProductResponse login(@RequestBody AddProductRequest addProductRequest) {
    
        if(addProductRequest.getProductName() == null || addProductRequest.getPrice() == null || addProductRequest.getQuantity() == null) {
            return new AddProductResponse("0001", "Invalid Product Details", addProductRequest.getProductName());
        }
        return new AddProductResponse("0000", "Product Added Successfully", addProductRequest.getProductName());
    }
}



