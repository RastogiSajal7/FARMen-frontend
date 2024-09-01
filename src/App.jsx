"use client";
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ListItem  from "./pages/ListItem";
import Login from './pages/Login';
import FarmerBuy from "./pages/FarmerBuy";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import UpdateAccount from "./pages/UpdateAccount";
import About from "./pages/About";
import PrintableOrder from "./components/PrintableOrder";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";

const App = () => {
  
  return (
    <>
    <ToastContainer autoClose={ 4000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/item" element={<ListItem/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/farmerBuy" element={<FarmerBuy/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/updateAccount" element={<UpdateAccount/>} />
          <Route path="/orders" element={<PrintableOrder/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/loader" element={<Loader/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
