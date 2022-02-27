import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import { SideMenu } from '../components/SideMenu';
import { Header } from '../components/Header';
import { PageHeader } from '../components/PageHeader';
import { Employee } from '../pages/Employee';

const theme = createTheme({
    shape: {
        borderRadius: '10px'
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    transform: 'translateZ(0)'
                }
            }
        }
    }
    
})




const useStyle = makeStyles({
    appMain: {
        paddingLeft: "200px",
        width: "100%",
       
    }
})

const App = () => {
    const classes = useStyle();
    return(
        <ThemeProvider theme={theme}>
            <SideMenu/>
            <div className={classes.appMain}>
                <Header/>
                <Employee/>
            </div>
            <CssBaseline/>
        </ThemeProvider>
            
        
    )
}

export default App;