import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import { SideMenu } from './sideMenu/SideMenu';
import { Header } from './header/Header';
import { Employee } from './employee/Employee';

import { Test } from './Text';

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
            
            
                <Header/>
                <Employee/>
                
           
            <CssBaseline/>
        </ThemeProvider>
            
        
    )
}

export default App;