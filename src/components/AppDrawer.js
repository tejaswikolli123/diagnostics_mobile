import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export const AppDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Book an Appointment', 'Blood Test Packages', 'For Doctors', 'Partner With Us', 'Blogs', 'About Us', 'Contact Us'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Book a Test', 'Health Packages', 'Download Report'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default AppDrawer;