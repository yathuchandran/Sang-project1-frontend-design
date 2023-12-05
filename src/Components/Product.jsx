import React from 'react';
import PropTypes from 'prop-types';
import Prdctssss from "./Prdctssss";
import NavBar from './NavBar';


function EnhancedTableToolbar() {

  return (
    <>
      <NavBar />
 
     
      <Prdctssss />

    </>

  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleExportToExcel: PropTypes.func.isRequired, // Ensure handleExportToExcel is a function prop

};

export default EnhancedTableToolbar;

