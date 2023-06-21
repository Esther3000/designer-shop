import './App.css';
import Search from './pages/search';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function App() {
 

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <a href='/'>Discount Hub</a>
          </Typography>
            <Button color="inherit"><a href='login'>Login</a></Button>
            <Button color="inherit"><a href='cart'><ShoppingCartIcon /></a></Button>
            <Button color="inherit">Logout</Button>
        </Toolbar>
    </Box>
    <Search />
    </>
  )
}

export default App
