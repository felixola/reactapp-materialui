import React from 'react';
import { 
    AppBar, 
    Typography, 
    Toolbar, 
    Tabs, 
    Tab, 
    Button, 
    useMediaQuery, 
    IconButton } from '@mui/material';
//import  ShoppingCartCheckOutIcon from '@mui/icons-material';
import { useState, usetheme } from 'react';
import DrawerComp from './DrawerComp';
import MenuIcon from '@mui/icons-material/Menu';


const PAGES = ['Product', 'Servives', 'About', 'ContactUs', 'Login'];

const Header = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false)
    const [ value, setValue ] = useState();
    const theme = usetheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                  {/* <ShoppingCartCheckOutIcon /> */}  
                  {
                      isMatch   ?  ( 
                          <>
                          <Typography sx={{ fontSize: '1.5rem', paddingLeft: '10%'}}>
                              {''}
                              Shopee
                          </Typography>
                          <DrawerComp />
                          </>
                      ) : (
                          <>
                           <Tabs sx={{ textColor: 'black', marginLeft: 'auto'}} value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'> 
                           {
                               PAGES.map((page, index) => (
                                   <Tab key={index} label={page} />
                               ))
                           }
                  </Tabs>
                  <Button sx={{ marginLeft: 'auto'}} variant='contained'>Login {' '}</Button>
                  <Button sx={{ marginLeft: '10px'}} variant='contained'>SignUp {' '}</Button>

                          </>
                      )
                  }
                </Toolbar>
                
                <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
                </IconButton>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;