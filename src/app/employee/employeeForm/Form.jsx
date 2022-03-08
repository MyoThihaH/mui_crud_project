import React from 'react';
import { makeStyles } from '@mui/styles';



const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: '10px',
            borderRadius: '10px',    
        }
    },
}))





export const Form = (props) => {
    const classes = useStyle();
    const { children, ...other } = props;
    
    

    return(
        <form className={classes.root} autoComplete='off' {...other}>
            { children }
        </form>
    )
}

