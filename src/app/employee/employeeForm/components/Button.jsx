import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        margin:'10px !important'
    }
}));

export const Button = (props) => {
    const classes = useStyle();
    const { variant, size, onClick, ...other } = props;
    return(
        <MuiButton 
        variant={variant || 'contained'} 
        size={size || 'small'} 
        className={classes.root}
        onClick={onClick}
        {...other}
        > {props.children} </MuiButton>
    )
}