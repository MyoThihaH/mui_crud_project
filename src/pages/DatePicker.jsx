import DateAdapter from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



export const DatePicker = (props) => {
    const { name, value, onChange } = props;
    const convertDefEventParam = (name, value) => ({
        target: {
            name,
            value
        }
    })
    
    return(
        <LocalizationProvider dateAdapter={DateAdapter}>
            <MobileDatePicker
                label="Hire Date"
                inputFormat="MM/dd/yyyy"
                value={value}
                name={name}
                onChange={(val) => onChange(convertDefEventParam(name, val))}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}