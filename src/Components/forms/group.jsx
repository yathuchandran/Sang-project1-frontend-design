import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField, MenuItem } from "@mui/material";
import {  makeStyles } from '@material-ui/core';

const initialFValuess = {
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
});

export default function Group({ groupss, actionss }) {
  const [Dialogopen, setDialogOpen] = useState(false);
  const [Groupvalue, setGroupvalue] = useState(initialFValuess);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupvalue({
      ...Groupvalue,
      [name]: value,
    });
  };

  useEffect(() => {
    
    setDialogOpen(groupss);
  }, [groupss]);

  const handleClose = () => {
    setDialogOpen(false);
    actionss(false);
  };

  console.log(groupss, actionss, "group 52");
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog open={Dialogopen} onClose={handleClose} maxWidth="md">
      <DialogTitle >Product Details</DialogTitle>

        <DialogActions>

          <Button variant="#4BB5FF" onClick={handleClose} sx={{ backgroundColor: '#4BB5FF', color: 'white' }}>
            Save
          </Button>
          <Button variant="#8C99E0" onClick={handleClose} sx={{ backgroundColor: '#8C99E0', color: 'white' }}>
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
                  value={Groupvalue.Name}
                  onChange={handleInputChange}
                  className={classes.customTextField}

                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Code"
                  name="Code"
                  value={Groupvalue.Code}
                  onChange={handleInputChange}
                  className={classes.customTextField}

                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="AltName"
                  name="AltName"
                  value={Groupvalue.AltName}
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
                  value={Groupvalue.Type}
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



              {/* Other fields can be added similarly */}
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
