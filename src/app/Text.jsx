import Paper from '@mui/material/Paper';
import { useRef, useState } from 'react';
import {  makeStyles} from '@mui/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


// const mytheme = createTheme({
//     components: {
//         MuiPaper:{
//             styleOverrides: {
//                 root: {
//                     backgroundColor:"red"
//                 }
//             }

//         },
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     color:"green",
//                     backgroundColor:"black"
//                 }
//             }
//         }
//     }
// });

const theme = createTheme();


const useStyle = makeStyles((theme)=>({
    root: {
        backgroundColor: theme.palette.secondary.main+'!important',
        
    }
}))

// export const Test = () => {
//     const classes = useStyle();
//     return(
//         <ThemeProvider theme={theme}>
//             <Paper elevation={3}>
//                 <Button variant="contained" className={classes.root}>Ok</Button>
//             </Paper>
//         </ThemeProvider>
        
//     )
// };

export const Test = () => {
    const [value, setValue] = useState(0);
    const reference = useRef();
    console.log(reference.current)
    return(
        <input type="button" ref={reference} onClick={()=>setValue(value+1)}></input>
    )
}