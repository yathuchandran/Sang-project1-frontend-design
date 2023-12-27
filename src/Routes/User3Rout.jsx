import React from 'react'
import { Route, Routes, Outlet } from "react-router-dom";
import LogIn from '../Components/LogIn';
import BasePage3 from '../Components/User3Components/BasePage3'
import  Dashboard  from '../Components/User3Components/Dashboard';
import Product from '../Components/User3Components/Product';
import BasePage from "../Components/User3Components/BasePage";

import Footer from '../Components/Footer'
function User3Rout() {
  return (
<Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/dashboard" element={<BasePage  value={'Dashboard'} />} />

        <Route path="/product" element={<BasePage  value={'product'} />}   />
        <Route path="/basepage" element={<BasePage  value={'BasePage'} />} />
        <Route path="/*" element={<Outlet />} />
    </Routes>  )
}

export default User3Rout