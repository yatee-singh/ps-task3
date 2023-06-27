'use client'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Display from './comp';
import Login from './login'
const defaultTheme = createTheme();
 
function App() {
  const [dataS,setData]=useState([]);
  const getData=(data)=>{
    console.log(data);
    setData(data);

  }
  return (

    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <Grid item marginLeft="10vw">
            <Login onSubmit={getData}/>
        </Grid>
        <Grid item sx={6} marginLeft="10vw">
            <Display dataS={dataS}/>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default App;
