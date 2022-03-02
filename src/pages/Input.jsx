import TextField from '@mui/material/TextField';

export const Input = (props) => {
    const { label, name, value, onChange, ...other } = props;
    return(
        <TextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        
        />
    )
}