import React from 'react';
import './css/landingPage.css';
import Search from './search';
import Container from '@mui/material/Container';
import tlouVideo from '../resources/the-witcher3-trailer.mp4';
import Button from '@mui/material/Button';


const LandingPage = () => {
  return (
    <>

    <div class="video-container">
    <video src={tlouVideo} autoPlay loop muted  poster="https://www.themoviedb.org/t/p/original/r3ZekmEuacx8y1uEysnZlO4tEFq.jpg"/>
    <Container class= "content">
    <h1 class='home-title'>THE WITCHER</h1>
    <h5>The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.</h5>
    <div class='video-btns'>
        <Button variant="contained" size="large" class='play-btn'>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="play"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path></svg></span> Play
        </Button>
        <Button variant="contained" size="large"class='info-btn' > 
        <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff"data-name="Layer 1" viewBox="0 0 24 24" id="information-sign"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></span> More info
        </Button>
      </div>
    
    </Container>
   
   </div>
   
   
   </>
  )
}

export default LandingPage