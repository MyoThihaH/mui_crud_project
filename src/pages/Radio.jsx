import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(theme => ({
  root: {
      '& .MuiFormControl-root': {
          padding: '0px',
          backgroundColor:'blue !important'
      },
      '& .MuiRadio-root': {
        color: 'green !important'
      }
  },
  
}))

export const MyRadio = (props) => {
const classes = useStyle();
const { name, value, onChange:handleOnChange } = props;

return(
<FormControl className={classes.root}> 
  <FormLabel>Gender</FormLabel>
  <RadioGroup
    name={name}
    value={value}
    onChange={handleOnChange}
    row
    color="success"
   
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
)
}