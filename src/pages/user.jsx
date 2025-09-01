import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

 function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();

        
        localStorage.setItem("token", data.token);

        alert("Login Successful!");
        navigate("/home"); 
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: "#f5f5f5",
          padding: 6,
          borderRadius: 2,
          boxShadow: 3,
          height:400,
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          User Login
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
}
export default Login