import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: '10px',
            

            
        }
    }
}))

const initialFValues = {
    id :0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}
const EmployeeForm = () => {
const [ values, setValues ] = useState(initialFValues);
const classes = useStyle();
    return(
       <form className={classes.root}>
           <Grid container>
               <Grid item direction ='column' container xs={6}>
                <Grid item xs={3} >
                    <TextField 
                    variant='outlined'
                    label='Full Name'
                    value={values.fullName}></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                    variant='outlined'
                    label='Email'
                    value={values.email}></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                    variant='outlined'
                    label='Mobile'
                    value={values.email}></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                    variant='outlined'
                    label='City'
                    value={values.email}></TextField>
                </Grid>
               </Grid>
               <Grid item xs={6}>
                <TextField 
                    variant='outlined'
                    label='last'
                    value={values.email}></TextField>
               </Grid>
           </Grid>
       </form>
    )
}

export default EmployeeForm;