import React from "react";
import NavBar from "./NavBar";
import Prdctssss from "./User2Components/Products";
import Product from "./Product";
import { Route, Routes, Outlet } from "react-router-dom";
import Sidebar from './Sidebar'
import Transaction from "./User1Components/Transaction";

function BasePage({value,user}) {
  return (
    <>
<div>
  <div className="basepage">
    
      <div className="row">
      <NavBar/>
      <div className="col-md-2 text-center ps-2 m-0 pe-2 side">

      </div>
      <div className="col-md-9 p-0">
        <div className="row mt-3 ps-5 pe-2">
          <div className="col-12 m-0">
          {value=="product"?(
          <Prdctssss />
              ):value=="Transaction"?(
                <Transaction />
                    ):(
                " "
              ) }
          </div>
        </div>
      </div>
    </div>
 
    
  </div>
</div>
    
    
    </>
   
  
  );
}

export default BasePage;


