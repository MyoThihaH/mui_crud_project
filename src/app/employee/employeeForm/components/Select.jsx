import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


export const Select = (props) => {

const { name, value, onChange:handleChange, departments, label, ...other } = props;
    return(
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                label={label}
                onChange={handleChange}
                {...other}
            >
                {
                    departments.map((item) => {
                        return  <MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
                    })
                }

            </MuiSelect>
            <FormHelperText>{other.helpertext}</FormHelperText>
        </FormControl>
    )
}


