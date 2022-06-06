import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import iconMenu from '../images/icon-menu.svg';
import drop from '../images/icon-arrow-down.svg';





const pages = ["Features", "Company", "Careers", "About"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)} >
            
        <List>
          {/* {pages.map((page, index) => ( */}
          {/* key={index} */}
          {/* {page} */}

          {/* Features */}
          <ListItem disablePadding sx={{marginRight: 'auto'}}>
            <ListItemButton >
            <ListItemText primary='Features' style={{ color: 'hsl(0, 0%, 41%)'}}/>
              <ListItemIcon>
                <img src={drop} height={6} width={8} alt='dropdown' iconPosition='end' style={{ marginLeft: '10px',}}/>
              </ListItemIcon>
              

            </ListItemButton>
            </ListItem>

            {/* Company */}
          <ListItem disablePadding sx={{marginRight: 'auto'}}>
            <ListItemButton >
            <ListItemText primary='Company' style={{ color: 'hsl(0, 0%, 41%)'}}/>
              <ListItemIcon>
                <img src={drop} height={6} width={8} alt='dropdown' iconPosition='end' style={{ marginLeft: '10px'}}/>
              </ListItemIcon>
              

            </ListItemButton>
            </ListItem>
        
        {/* Career */}
        <ListItem disablePadding sx={{marginRight: 'auto'}}>
            <ListItemButton >
            <ListItemText primary='Careers' style={{ color: 'hsl(0, 0%, 41%)'}}/>
            </ListItemButton>
            </ListItem>

            {/* About */}
            <ListItem disablePadding sx={{marginRight: 'auto', fontSize: '10px'}}>
            <ListItemButton >
            <ListItemText primary='About' style={{ color: 'hsl(0, 0%, 41%)', }}/>
            </ListItemButton>
            </ListItem>
          {/* ))} */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
       <img src={iconMenu} alt='HamburgerMenu'/>
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;