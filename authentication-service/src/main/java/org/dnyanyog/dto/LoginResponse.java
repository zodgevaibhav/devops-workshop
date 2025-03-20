package org.dnyanyog.dto;

import org.springframework.stereotype.Component;

@Component
public class LoginResponse {
    private String responseCode;
    private String responseMessage;    
    private String userName;

    public LoginResponse() {
    }

    public LoginResponse(String responseCode, String responseMessage, String userName) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.userName = userName;
    }
    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String username) {
        this.userName = username;
    }
}

