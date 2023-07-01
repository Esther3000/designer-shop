import { React, useState, useEffect } from 'react';
import './css/register.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const configuration = {
      method: "post",
      url: "https://shop-site-backend.onrender.com/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setIsLoggedIn(true);

         cookies.set("TOKEN", result.data.token, {
          path: "/",
         });

        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      const delay = 500; 

      const timeoutId = setTimeout(() => {
        navigate('/');
      }, delay);

      // Clean up the timeout when the component unmounts or when isLoggedIn changes
      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn, navigate]);

  if (isLoading) {
    return (
      
      <div class="loader">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" class="spinner">
        <circle stroke="url(#gradient)" r="20" cy="33" cx="33" stroke-width="1" fill="transparent" class="path"></circle>
          <linearGradient id="gradient">
            <stop stop-opacity="1" stop-color="#E50914FF" offset="0%"></stop>
            <stop stop-opacity="0" stop-color="#E50914FF" offset="100%"></stop>
          </linearGradient>
        
      </svg> 
    </div>
    
    );
  }

  return (
    <>
     <div class="register-page">
    <Typography class= 'netflix-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742" width="200px" height="150px"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z" fill="#E50914FF" fill-color-id="0" stroke-color-id="-1" recolor-fill="true" recolor-stroke="true"/></svg>
         </Typography>
    <Box component="span"
    sx={{ display: 'flex', mx: '33.3%', transform: 'scale(1)'  }}>
    <Card sx={{ maxWidth: 800, minHeight: '90vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', color:'white', }}>
    <CardContent >
    
      <Box class="form">
        <h1>Sign In</h1>
                  
        {/* email */}
        
        <TextField fullWidth label={'email or phone number'} class="input-box" margin="normal" type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email or phone number'
            />
         {/* password */}
        
          <TextField fullWidth label={'Password'} class="input-box" margin="normal" type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            />
                   <Button  fullWidth class= "submit-button"
        variant="primary" 
        type="submit"
        onClick={(e) => handleLogin(e)}
        >
        Sign In
        </Button>
        </Box>
        <Box class='extra-statements'>
      {/* display success message */}
      {isLoggedIn ? (
          <h5 className="text-success">You Are Registered Successfully</h5>
        ) : (
          <div>
          <h5 className="text-danger">You Are Not Registered</h5>
          
          </div>
        )}
      <h6>New to Netflix? <Link to="/register">Register</Link></h6>
      <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href=''>Learn more.</a></p>
      </Box>
                
      </CardContent>
      </Card>
      </Box>
      </div>

    </>
  )
}

export default Login;