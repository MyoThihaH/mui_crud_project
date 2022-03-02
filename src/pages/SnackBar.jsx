import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

export const SnackBar = (props) => {
    const {color, message} = props;
    return(
        <Snackbar
        
        
        TransitionComponent={TransitionUp}
        message={message}
        color={color}
        autoHideDuration={6000}
        {...props}
        
      />
    )
}