import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles((theme)=>({
    root:{
        backgroundColor: 'white !important',  
        
    },
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
    },
    
    
}))



export const Header = () => {
    const classes = useStyle();
    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item lg={4} >
                        <InputBase 
                        className={classes.searchInput}
                        placeholder="search topics"
                        startAdornment={<SearchIcon/>}
                        />
                        
                    </Grid>
                    
                    <Grid item lg={8} container direction='row-reverse' spacing='20' alignItems="center">
                        <Grid item >
                            <IconButton>
                                <Badge color="primary">
                                    <PowerSettingsNewIcon/>
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <IconButton>
                                <Badge badgeContent={4} color="error">
                                    <MessageIcon/>
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item >
                            
                            <IconButton className={classes.notiIcon}>
                                <Badge badgeContent={4} color="error">
                                    <NotificationsNoneIcon />
                                </Badge>
                            </IconButton>  
                            
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}