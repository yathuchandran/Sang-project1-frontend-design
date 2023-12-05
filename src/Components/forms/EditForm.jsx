import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField ,MenuItem } from "@mui/material";
import {  makeStyles } from '@material-ui/core';

const initialFValue = {
  id: 0,
  Name: '',
  Code: '',
  AltName: '',
  Type: "",
  Vat: '',
  Tax: "",
  Parent: "",
  Batchable: '',
};

const types = [
  { value: 'FinishedProduct', label: 'Finished Product' },
  { value: 'Materials', label: 'Materials' },
];

const useStyles = makeStyles({
  customTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '60px', /* Adjust the border-radius as needed */
      borderColor: 'dark',
      height: '40px', /* Set your desired height */
      width:'250px'

    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'dark',
      
    },
  },
})

export default function EditForm( {edit,handleEdit} ) {
  const [opens, setOpens] = useState(false);
  const [Editvalue, setEditvalue] = useState(initialFValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditvalue({
      ...Editvalue,
      [name]: value,
    });
  };


  React.useEffect(() => {
    setOpens(edit); 
  }, [edit]);

  const handleClose = () => {
    setOpens(false);
    handleEdit(false)
  };

  console.log(edit,21);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog open={opens} onClose={handleClose} maxWidth="md">
        <DialogTitle>Product Details</DialogTitle>
        <DialogActions>
        <Button variant="#4BB5FF"  onClick={handleClose} sx={{backgroundColor:'#4BB5FF',color: 'white'}}>
            New
          </Button>
          <Button variant="#8C99E0"  onClick={handleClose} sx={{backgroundColor:'#8C99E0',color: 'white'}}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}  sx={{backgroundColor:'#FF5555',color: 'white'}}>
            Delete
          </Button>
          <Button variant="#FFBE55"  onClick={handleClose} sx={{backgroundColor:'#FFBE55',color: 'white'}}>
            Close
          </Button>
        </DialogActions>
        <DialogContent>
        <form >
      <Grid container spacing={2}>


        <Grid item xs={4}>
        
          <TextField
            variant="outlined"
            label="Name"
            name="Name"
            value={Editvalue.Name}
            onChange={handleInputChange}
            className={classes.customTextField}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Code"
            name="Code"
            value={Editvalue.Code}
            onChange={handleInputChange}
            className={classes.customTextField}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="AltName"
            name="AltName"
            value={Editvalue.AltName}
            onChange={handleInputChange}
                             className={classes.customTextField}

          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            select
            variant="outlined"
            label="Type"
            name="Type"
            value={Editvalue.Type}
            onChange={handleInputChange}
            className={classes.customTextField}
            fullWidth

            >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>


        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Vat"
            name="Vat"
            value={Editvalue.Vat}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Tax"
            name="Tax"
            value={Editvalue.Tax}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Parent"
            name="Parent"
            value={Editvalue.Parent}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
          
      </Grid>
    </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
