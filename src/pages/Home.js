import React from 'react';
import { Typography, Button, Grid, Stack, Box } from '@mui/material';
import Header from '../components/Header';
import clean from '../styles/ThemeCmz';
import { ThemeProvider } from "@mui/material";
import Photo from '../images/image-hero-desktop.png';
import dataBiz from '../images/client-databiz.svg';
import clientMaker from '../images/client-maker.svg';
import clientMeet from '../images/client-meet.svg';
import clientAudio from '../images/client-audiophile.svg';
import mobileimg from '../images/image-hero-mobile.png';
import '../styles/Home.css';


const Home = () => {
    return(
       <ThemeProvider theme={clean}>
           <Header />
            
            {/* Heading 1 */}
           <Grid container spacing={2} >
               <Grid item md={6} sx={{justifyContent: 'center', alignItems: 'center'}}>
                   <Stack direction='column' spacing={2}  className='stackses' sx={{ marginLeft: {md: '8.0rem', xs: '0'},}}>

                    <Box sx={{ display: {md: 'none'},}}>
                    <img src={mobileimg} alt='desktop'  style={{alignItems: 'center', alignSelf: 'center', marginLeft: {md:'8.5rem'}, marginTop: '2.0rem',
                    width: '100%', height: '90%'}}/>
                    </Box>

                    {/* Make Remote work for md devices */}
                   <Typography variant='h5' sx={{
                       display: {xs: 'none', md: 'block'},
                       color: 'black', 
                       fontSize: {xs: '2.5rem', md: '4.5rem'}, 
                       fontWeight: 'bold', 
                       alignItems: {md:'center', xs: 'center'},
                       paddingTop: {md: '7.5rem'},
                       marginTop: {md:'9.5rem',}, 
                       lineHeight: {md: '4.5rem'},}} 
                       className='remote'>Make <br/>remote work</Typography> 

                       {/* Make Remote ork for sm devices */}
                       <Typography variant='h5' sx={{
                           display: {md: 'none'}, 
                           fontSize: '2.0rem', 
                           fontWeight: 'bold', 
                           justifyContent: 'center',
                           alignSelf:'center'}}>Make remote work</Typography>

                           {/* Text */}
                   <Typography variant='subtitle1' sx={{
                       fontSize: {md:'14px', xs:'15px'}, 
                       paddingLeft: {xs: '7%', md: '0'},
                       paddingTop: {xs: '5px', md: '4.5rem'}, 
                       color: 'hsl(0, 0%, 41%)', 
                       fontWeight: 500, }}>Get your theme in sync,no matter your location. <br /> 
                       Streamline processes, create team rituals , and <br /> 
                       watch productivity soar</Typography>

                       {/* Learn More Button */}
                   <Button variant='contained' sx={{
                       backgroundColor: 'hsl(0, 0%, 8%)',
                       textTransform: 'capitalize',
                       height: '45px',
                       width: '130px',
                       fontWeight: 600,
                       marginLeft: {xs: '50%', md: '0'},
                       left: { xs:'31%', md: '0'},
                       borderRadius: '10px',
                       boxShadow: 'none',}}> Learn  <span style={{textTransform: 'lowercase', marginLeft: '0.2em'}}> more</span></Button>
                   </Stack>

                   {/* sponsors */}
                   <Stack 
                   direction='row' 
                   spacing={4.0} 
                   sx={{
                       marginTop: {md:'4.5rem', xs: '2.5rem'}, 
                       marginLeft: {md: '8.0rem', xs: '4%'}, 
                       alignSelf: { xs: 'center'},
                       height: '15px', 
                       alignItems: 'center'}}>
                       <img src={dataBiz} alt='databiz' style={{ width: '73px', height: '15px'}} />
                       <img src={clientAudio} alt='clientaudio' style={{ width: '65px', height: '30px'}}/>
                       <img src={clientMeet} alt='clientmeet' style={{ width: '70px', height: '17px'}} />
                       <img src={clientMaker} alt='clientmaker' style={{ width: '70px', height: '23px'}}/>
                   </Stack>
               </Grid>

               {/* Side image */}
               <Grid item md={6} sx={{justifyContent: 'center', alignItems: 'center', display: {xs: 'none', md: 'block'}}}>
                   <img 
                   src={Photo} 
                   alt='desktop' 
                   height={540} 
                   width={400} 
                   style={{
                       alignItems: 'center', 
                       alignSelf: 'center', 
                       marginLeft: '8.0rem', 
                       marginTop: '1.5rem'}}/> 
               </Grid>
           </Grid>
       </ThemeProvider>
       
    );
}

export default Home;