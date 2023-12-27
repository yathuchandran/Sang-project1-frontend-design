import React from 'react'
import SideBar from './SideBar'
import Products from './Products'
import SubNavbar from '../SubNavbar'
function BasePage({value,user}) {
  return (
    <>
    <div>
      <div className="basepage">
        
          <div className="row">
            <h2>hello</h2>
          <SideBar/>
          <div className="col-md-2 text-center ps-2 m-0 pe-2 side">
    
          </div>
          <div className="col-md-2 p-0" >
            <div className="row   "  >
              <div className="col-8  m-1 " style={{  marginTop:'2rem', }}>
                {user=="product"?(
                   <Products/>
                ):("")}
               
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