import '../App.css';
import './css/navbar.css';
import { React, useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
   
    const handleChange = (event) => {
        setAuth(event.target.checked);

      };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        

      };
    
      const handleClose = () => {
        setAnchorEl(null);

      };
      
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform logout logic here
    // For example, clear user session, reset state, etc.
    // Then redirect to the login page
    navigate('/login');
  }
  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor:'rgba(0,0,0,0.5)',}} >
    <Container maxWidth="xl"> 
    <Box sx={{ flexGrow: 1}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="img" component="div" class='netflix-logo'sx={{ flexGrow: 1,  }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742" width="100px" height="100px"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z" fill="#E50914FF" fill-color-id="0" stroke-color-id="-1" recolor-fill="true" recolor-stroke="true"/></svg>
         </Typography>
         <Typography variant="h4" component="div" class= 'nav-buttons'sx={{ flexGrow: 2, display: "flex", flexDirection: "row"}}>
          <Button color="inherit">Home</Button>
            <Button color="inherit">TV Shows</Button>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">New & popular</Button>
            <Button color="inherit">My list</Button>
            <Button color="inherit">Browse by languages</Button>
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 3, display: "flex", flexDirection: "row", }} class="navbar-end">
          <Button color="inherit"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></Button>
          <Button color="inherit"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" viewBox="0 -960 960 960" width="48"><path d="M160-200v-60h84v-306q0-84 49.5-149.5T424-798v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717-566v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80ZM304-260h353v-306q0-74-51-126t-125-52q-74 0-125.5 52T304-566v306Z"/></svg></Button>
          
          
          
          {auth && (
            <div class='dropdown'>
               <IconButton
      onClick={handleMenu}
      color="inherit"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
    >
      {Boolean(anchorEl) ? <ExpandLess /> : <ExpandMore  />}
    </IconButton>
              <Menu
              sx={{bgColor:'black'}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                  
                  
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                  
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
                
              >
                <MenuItem ><Button ><Link to="/register" >Register</Link></Button></MenuItem>
                <MenuItem ><Button ><Link to="/login" >Login</Link></Button></MenuItem>
                <MenuItem ><Button color="inherit" onClick={handleLogout}>Sign out of Netflix</Button></MenuItem>
              </Menu>
            </div>
          )}
          </Typography>
          
        </Toolbar>
    </Box>
    </Container>
    </AppBar>
    
    </>
  )
}

export default Navbar;