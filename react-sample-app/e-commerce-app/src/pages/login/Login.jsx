import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';
import './Login.css'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loinResponse, setLoginResponse] = useState({});
  const navigate = useNavigate();

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function login() {
    const responseData = await loginUser(userName, password) 
    setLoginResponse(responseData)
  }

  useEffect(() => {
    if(loinResponse.responseCode === "0000") {
      console.log("Login success")
      navigate("/home")
    } 
  }
  , [loinResponse]);  

  async function loginUser(userName, password) {
    try {
      const response = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
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
      <h1>Login</h1>
      <div className="login-container">
        <input
          type="text"
          onChange={handleUserNameChange}
          placeholder="Enter user name"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          placeholder="Enter user password"
        />
        <button onClick={login}>Login</button>
        </div>
    </div>
  );
}

export default Login
