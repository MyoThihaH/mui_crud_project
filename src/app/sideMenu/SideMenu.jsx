
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    sideMenu: {
        left: '0px',
        display: 'flex',
        backgroundColor: 'green',
        height: '100%',
        width: '200px',
        position: 'absolute',
    }
})


export const SideMenu = () => {
    const classes = useStyle();
    return(
        <div className={classes.sideMenu}>
          
        </div>
    )
}