import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [productResponse, setProductResponse] = useState({});

  const navigate = useNavigate();

  async function handleSave(){
    console.log("Product saved:", { productName, price, quantity });
    const response = await addProduct(productName, price, quantity);
    setProductResponse(response);
  };

  useEffect(() => {
    if(productResponse.responseCode === "0000") {
      alert("Product saved successfully");
      navigate("/home");
    }
  }, [productResponse]);

  const handleCancel = () => {
    setProductName("");
    setPrice("");
    setQuantity("");
    navigate("/home");
  };


  async function addProduct( productName, price, quantity) {
    try {
      const response = await fetch(`http://localhost:8081/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  productName, price, quantity }),
      });
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  return (
    <div>
      <h1>Add Product</h1>
      <form>
        <input
          placeholder="Enter product name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          placeholder="Enter price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Enter quantity"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
