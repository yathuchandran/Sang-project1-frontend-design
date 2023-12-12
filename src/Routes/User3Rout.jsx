import React from 'react'
import { Route, Routes, Outlet } from "react-router-dom";
import LogIn from '../Components/LogIn';
import BasePage3 from '../Components/User3Components/BasePage3'
import  Dashboard  from '../Components/User3Components/Dashboard';
import Product from '../Components/User3Components/Product';
function User3Rout() {
  return (
<Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/product" element={<Product   />} />
        <Route path="/*" element={<Outlet />} />
    </Routes>  )
}

export default User3Rout