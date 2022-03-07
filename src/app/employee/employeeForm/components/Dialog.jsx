import Dialog from '@mui/material/Dialog';



export const myDialog = (props) => {
const {open, ...other} = props;
    return(
        <Dialog open={open} close={open} {...other}>
            {props.children}
        </Dialog>
    )
}