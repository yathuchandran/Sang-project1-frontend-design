import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField, MenuItem } from "@mui/material";
import {  makeStyles } from '@material-ui/core';

const initialFValues = {
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
  // Add more options if needed
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

function Group({Addgroups,groupsAdd}) {
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  React.useEffect(() => {
    setOpen(Addgroups);
  }, [Addgroups]);

  const handleClose = () => {
    setOpen(false);
    groupsAdd(false)
  };
// console.log(Addgroups,groupsAdd,"addgroup 46");
const classes = useStyles();

  return (
    <React.Fragment>
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>Product Details</DialogTitle>
      <DialogActions>
      <Button variant="#4BB5FF"  onClick={handleClose} sx={{backgroundColor:'#4BB5FF',color: 'white'}}>
          New
        </Button>
        <Button variant="#8C99E0"  onClick={handleClose} sx={{backgroundColor:'#8C99E0',color: 'white'}}>
          Save
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
            value={values.Name}
            onChange={handleInputChange}
            className={classes.customTextField}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Code"
            name="Code"
            value={values.Code}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="AltName"
            name="AltName"
            value={values.AltName}
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
            value={values.Type}
            onChange={handleInputChange}
            fullWidth
            className={classes.customTextField}
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
            value={values.Vat}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Tax"
            name="Tax"
            value={values.Tax}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Parent"
            name="Parent"
            value={values.Parent}
            onChange={handleInputChange}
            className={classes.customTextField}
            />
        </Grid>

        {/* Other fields can be added similarly */}
      </Grid>
    </form>
    </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
export default Group;