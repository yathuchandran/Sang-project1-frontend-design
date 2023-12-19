import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, Paper, Table } from '@material-ui/core';
import Tableview from './Table';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        height:'9%',
        padding: theme.spacing(1),
        margin: 'auto',
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    inputField: {
        width: '90%',
        marginBottom: theme.spacing(2),
        height: '100%'
    },
    saveButton: {
        padding: theme.spacing(0.3,),
        width:'5%',
        borderRadius: '8px',
        backgroundColor: '#0583D2',
        color: 'white',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#2C6D8E',
        },
    },
}));
function Transaction() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Main</h2>
                <br />
                <form>
                    <Grid container spacing={1}>

                        <Grid item xs={3}>
                            <TextField
                                label="Document No"
                                variant="outlined"
                                className={classes.inputField}
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Date"
                                variant="outlined"
                                type="Date"
                                className={classes.inputField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                label="Vendor"
                                variant="outlined"
                                type="Vendor"
                                className={classes.inputField}
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Jurisdiction"
                                variant="outlined"
                                type="Jurisdiction"
                                className={classes.inputField}
                               InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Declaration Type"
                                variant="outlined"
                                type="Declaration Type"
                                className={classes.inputField}
                              InputProps={{
                                    style: {
                                        height: '35px',
                                        },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Place Of Supply"
                                variant="outlined"
                                type="Place Of Supply"
                                className={classes.inputField}
                               InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Declaration Date"
                                variant="outlined"
                                type="Date"
                                className={classes.inputField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="DecNo"
                                variant="outlined"
                                type="DecNo"
                                className={classes.inputField}
                              InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Inco Terms"
                                variant="outlined"
                                type="Inco Terms"
                                className={classes.inputField}
                               InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Currency"
                                variant="outlined"
                                type="Currency"
                                className={classes.inputField}
                                 InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="ExchangeRate                                "
                                variant="outlined"
                                type="ExchangeRate                                "
                                className={classes.inputField}
                               InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="ETA"
                                variant="outlined"
                                type="Date"
                                className={classes.inputField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Due Date"
                                variant="outlined"
                                type="Date"
                                className={classes.inputField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    style: {
                                        height: '30px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Warehouse"
                                variant="outlined"
                                type="Warehouse"
                                className={classes.inputField}
                               
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                       
                        <Grid item xs={3}>
                            <TextField
                                label="Narration"
                                variant="outlined"
                                type="Narration"
                                className={classes.inputField}
                                InputProps={{
                                    style: {
                                        height: '35px',
                                    },
                                }}
                            />
                        </Grid>
                        
                    

                    </Grid>

                    <div style={{ textAlign: 'right', marginTop: '1px' }}>
                        <Button
                            variant="contained"
                            className={classes.saveButton}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Paper>

            <Tableview/>
        </div>
    )
}

export default Transaction