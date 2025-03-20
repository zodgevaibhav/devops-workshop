package org.dnyanyog.dto;

import org.springframework.stereotype.Component;

@Component
public class AddProductResponse {
    private String responseCode;
    private String responseMessage;  

    
    private String productName;

    
    public AddProductResponse() {
    }
    
    public AddProductResponse(String responseCode, String responseMessage, String productName) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.productName = productName;
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
    
    public String getProductName() {
        return productName;
    }
    
    public void setProductName(String productName) {
        this.productName = productName;
    }

}
