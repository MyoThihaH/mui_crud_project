import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles( theme => ({
    root: {
        backgroundColor: '#f4f5f0 !important'
    },
    pageTitle: {
        display: 'flex',
        padding: '15px',
        alignItems: 'flex-start',

    },
    pageIcon: {
        padding: '10px',
        display: 'inline-block',
        marginRight: '10px',
        color:'green !important',
        
        
    }
}))



export const PageHeader = (props) => {
    const classes = useStyle();
    const { title, subtitle, icon } = props;

    return (
        <Paper elevation={0} className={classes.root} >
            <div className={classes.pageTitle} >
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div>
                    <Typography 
                    variant="h6"
                    component="div"
                    >
                        {title}
                    </Typography>

                    <Typography 
                    variant="subtitle2"
                    component="div"
                    >
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>

       

    )
}
