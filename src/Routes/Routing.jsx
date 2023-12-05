// Home.js
import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import LogIn from "../Components/LogIn";
import BasePage from "../Components/BasePage";
import Product from "../Components/Product";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/home" element={<BasePage/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<Outlet />} />
    </Routes>
  );
}

export default Home;
