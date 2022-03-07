
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Form } from './Form';
import { useForm } from './useForm'
import { Control } from './components/control';
import * as Services from '../../../services/employeeServices';


const initialFValues = {
    id :0,
    fullName:"",
    email:"",
    mobile:"",
    city:"",
    gender:'male',
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false
};

const useStyle = makeStyles({
    snackBar:{
        color:"red !important"
    }
})

const EmployeeForm = (props) => {
    const { reRender, setReRender, initialValues} = props;
    const valuesF = initialValues?initialValues:initialFValues;
    const classes = useStyle();
    const { values, setValues, handleOnChange, validate, error, setError, successOpen, setSuccessOpen, failOpen, setFailOpen } = useForm(valuesF);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(initialValues)
        if(validate() && !initialValues){
            setValues(initialFValues);
            setSuccessOpen(true);
            Services.insertEmployee(values);
            setReRender(!reRender);
            
        } else if(validate() && initialValues){
            setValues(initialFValues);
            setSuccessOpen(true);
            Services.updateEmployee(values);
            setReRender(!reRender);
        } else {
            setFailOpen(true);
        }
        
    }
    const handleResetClick = () => {
        setValues(initialFValues);
        setError({});
    }
    return(
       <Form onSubmit={handleSubmit}>
           <Grid container>
               <Grid item direction ='column' container xs={6}>
                <Grid item  >
                    <Control.Input
                    label = 'Full Name'
                    name = 'fullName'
                    value = {values.fullName}
                    onChange = {handleOnChange}
                    error={error.fullName?true:false}
                    helperText={error.fullName}
                    />
                </Grid>
                <Grid item >
                <Control.Input
                    label = 'Email'
                    name = 'email'
                    value = {values.email}
                    onChange = {handleOnChange}
                    error={error.email?true:false}
                    helperText={error.email}
                    />
                </Grid>
                <Grid item >
                    <Control.Input
                        label = 'Mobile'
                        name = 'mobile'
                        value = {values.mobile}
                        onChange = {handleOnChange}
                        error={error.mobile?true:false}
                        helperText={error.mobile}
                    />
                </Grid>
                <Grid item >
                    <Control.Input
                        label = 'City'
                        name = 'city'
                        value = {values.city}
                        onChange = {handleOnChange}
                        error={error.city?true:false}
                        helperText={error.city}
                    />
                </Grid>
               </Grid>
               <Grid item container xs={6} direction='column' justifyContent="space-evenly">
                <Grid item sx={{height:'105px'}}>
                    <Control.Radio
                    name='gender'
                    value={values.gender}
                    onChange={handleOnChange}
                    />
                </Grid>
                <Grid item >
                   <Control.Select
                    name='departmentId' 
                    value={values.departmentId}
                    departments={Services.getDepartmentCollection()}
                    label="Department"
                    error = {error.departmentId?true:false}
                    helpertext = {error.departmentId}
                    onChange={handleOnChange}
                    />
                </Grid>
                
                <Grid item >
                    <Control.DatePicker
                     value={values.hireDate}
                     name='hireDate'
                     onChange={handleOnChange}
                     />
                </Grid>
                <Grid item >
                   <Control.CheckBox 
                   value={values.isPermanent}
                   name='isPermanent'
                   label="Permanent"
                   onChange={handleOnChange}
                   />
                </Grid>
               </Grid>
              
                    
                <Grid item container direction='row-reverse' >
                    <Grid item sx={{marginRight:'80px'}}>
                        <Control.Button variant="contained" type="submit" >Submit</Control.Button>
                    </Grid>
                    <Grid item >
                        <Control.Button variant="contained" onClick={handleResetClick}>Reset</Control.Button>
                        <Control.SnackBar open={successOpen} onClose={()=> setSuccessOpen(false)} color="white" backgroundColor="green" message="Success!"/>
                        <Control.SnackBar open={failOpen} onClose={()=> setFailOpen(false)} color="black" backgroundColor="red" message="Error! please fill all field"/>
                    </Grid>   
                </Grid>
           </Grid>
       
       </Form>
    )
}

export default EmployeeForm;