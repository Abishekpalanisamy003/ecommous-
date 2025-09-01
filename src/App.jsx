import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './pages/home';
import ProductDetail from './pages/productdetail';
import AdminDashboard from './pages/admindashborard';
import Login from './pages/user';
import AdminLogin from './pages/adminlogin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<Login/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />

      </Routes>
    </Router>
  );
}

export default App;