import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';


export const EditButton = (props) => {
    const { onClick } = props;
    return(
        <IconButton>
            <EditIcon onClick={onClick}/>
        </IconButton>
    )
}
