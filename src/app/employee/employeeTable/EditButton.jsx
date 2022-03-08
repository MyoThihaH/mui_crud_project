import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const EditButton = (props) => {
    const { onClick, toolTip } = props;
    return(
        <Tooltip title={toolTip}>
        <IconButton>
            <EditIcon onClick={onClick}/>
        </IconButton>
        </Tooltip>
    )
}
