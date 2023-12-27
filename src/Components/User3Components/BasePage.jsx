import React from 'react'
import NavBar from './Navbar'
import Product from '../User2Components/Products';
import BasePage3 from '../User3Components/BasePage3'
import  Dashboard  from '../User3Components/Dashboard';
import SubNavbar from '../SubNavbar';

function BasePage({value}) {
  return (
    <>
    <div>
      <div className="basepage">
        
          <div className="row">
          <NavBar/>
          <SubNavbar/>

          <div className="col-md-2 text-center ps-2 m-0 pe-2 side">
    
          </div>
          <div className="col-md-9 p-0">
            <div className="row mt-4 ps-5 pe-2">
              <div className="col-12 m-1">
              {value=="product"?(
              <Product />
                  ):value=="BasePage"?(
                    <BasePage3 />
                        ):value=="Dashboard"?(
                            <Dashboard />
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
  )
}

export default BasePage