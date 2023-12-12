import React from 'react'
import { Route, Routes, Outlet } from "react-router-dom";
import LogIn from '../Components/LogIn';
import BasePage from '../Components/User2Components/BasePage2';

function User2Rout() {
  return (
<Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/main" element={<BasePage value={'user2'}/>} />

        <Route path="/product" element={<BasePage  value={'user2'} user={'product'} />} />
        <Route path="/*" element={<Outlet />} />
    </Routes>
      )
}

export default User2Rout