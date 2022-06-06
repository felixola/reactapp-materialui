import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import Logo from '../images/logo.svg';
import { ThemeProvider } from "@mui/material";
import clean from '../styles/ThemeCmz';
import CustomBtn from '../styles/CustomBtn';
import drop from '../images/icon-arrow-down.svg';


const Header = () => {

  const [value, setValue] = useState();
  const themes = useTheme();
  console.log(themes);
  const isMatch = useMediaQuery(themes.breakpoints.down("md"));
  console.log(isMatch);


  return (
    <ThemeProvider theme={clean}>
      <AppBar sx={{ background: "white", marginTop: '10px', justifyContent: 'center', alignText: 'center'}} elevation={0} position='static'>
        <Toolbar>

           {/* Logo */}
           <img src={Logo} alt='logo' style={{marginRight: '20px', marginTop: '5px', paddingLeft: '12px', width: '75px', alignContent: 'center'}}/>

          { isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              
              <DrawerComp />
            </>
          ) : (
            <>

              {/* Nav */}
              <Tabs sx={{marginRight: "auto", color: 'hsl(0, 0%, 41%)',alignItems: 'center', alignText: 'center'}}
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}>


                  {/* NavItems */}
                <Tab icon={<img src={drop} height={6} width={8} alt='dropdown'/>}  iconPosition='end' label="Features" sx={{ textTransform: 'capitalize',ml:'12px'}}  /> 
                <Tab icon={<img src={drop} height={6} width={8} alt='dropdown'/>}  iconPosition='end'  label="Company" sx={{ textTransform: 'capitalize',ml:'12px'}} />
                <Tab label="Careers" sx={{ textTransform: 'capitalize'}} />
                <Tab label="About" sx={{ textTransform: 'capitalize'}} />
              </Tabs>
              

              <Tabs sx={{mr: '15px'}}>
                <Tab label='Login' sx={{textTransform: 'capitalize', color: 'hsl(0, 0%, 41%)', mr: '10px', fontSize:'15px', fontWeight: 500,}} />
                <CustomBtn variant="outlined">
                Register
              </CustomBtn>
              </Tabs>
              {/* Discover Button */}
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;