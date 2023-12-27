import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import LogIn from "../Components/LogIn";
import BasePage from "../Components/BasePage";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/home" element={<BasePage value={'user1'}/>} />
        <Route path="/product" element={<BasePage  value={'product'} />} />
        <Route path="/Transaction" element={<BasePage  value={'Transaction'} />} />

        <Route path="/*" element={<Outlet />} />
    </Routes>
  );
}

export default Home;
