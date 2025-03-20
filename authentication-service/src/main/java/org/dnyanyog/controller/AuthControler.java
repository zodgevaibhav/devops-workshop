package org.dnyanyog.controller;

import org.dnyanyog.dto.LoginRequest;
import org.dnyanyog.dto.LoginResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthControler {
    
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        if(loginRequest.getUserName() == null || loginRequest.getPassword() == null) {
            return new LoginResponse("0001", "Invalid Username or Password", loginRequest.getUserName());
        }
        if(loginRequest.getUserName().equals("vzodge") && loginRequest.getPassword().equals("Test@123")) {
            return new LoginResponse("0000", "Login Successful", loginRequest.getUserName());
        }
        return new LoginResponse("0002", "Invalid Username or Password", loginRequest.getUserName());
    }
}



