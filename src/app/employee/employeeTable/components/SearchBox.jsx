
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    searchInput:{
        opacity: '0.9',
        padding: '0px 8px',
        fontSize: '0.8rem',
        border: '1px solid green',
        borderRadius: '25px',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '5px'
        }    
    }
});

export const SearchBox = (props) => {
    const classes = useStyle();
    const { onChange, placeHolder, ...other } = props;
    return(
        <InputBase 
            className={classes.searchInput}
            placeholder={placeHolder}
            startAdornment={<SearchIcon/>}
            onChange={onChange}
            {...other}
        />
    )
};

 