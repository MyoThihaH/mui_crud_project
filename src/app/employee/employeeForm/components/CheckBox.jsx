import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme)=>({
    root: {
        marginLeft:'10px',
        '& .MuiCheckbox-root':{
            color:'green !important'
        }
    }
}))

export const CheckBox = (props) => {
    const classes = useStyle();
    const { value, name, onChange:handleOnChange, label } = props;
    const bool = value=="true"?true:false;
    
    
    return(
        <FormGroup className={classes.root}>
        <FormControlLabel control={<MuiCheckbox checked={bool} name={name} onChange={handleOnChange} value={!bool} />} label={label} />
        </FormGroup>
    )
}