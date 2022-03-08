import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

import { Control } from './control';

const useStyle = makeStyles({
    paper: {
        '& .MuiDialog-paper':{
            position:"absolute !important",
            top:"60px !important",
            padding:"0px !important",
            width:"350px"
        }
    },
    dialogContent: {
        textAlign: "center !important"
    },
    dialogAction: {
        justifyContent: "center !important"
    }
});

export const ConfirmDialog = (props) => {
    const {confirm, setConfirm, other} = props;
    const classes = useStyle();
    return (
       
        <Dialog
           open={confirm.open}
           onClose={confirm.open}
           className={classes.paper}
           
           
        >
            <DialogTitle className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirm.title}
                </Typography>
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirm.subtitle}
                </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Control.Button onClick={()=> {confirm.onConfirm();setConfirm({...confirm, open:false})}}>Ok</Control.Button>
                <Control.Button onClick={() => setConfirm({...confirm,open:false})}>Cancle</Control.Button>
            </DialogActions>
        </Dialog>
        
    )
}