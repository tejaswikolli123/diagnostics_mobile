import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchIcon from '@mui/icons-material/Search';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { AppDrawer } from './AppDrawer';

export const Header = () => {
  
  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(max-width:960px)');
  const isMd = useMediaQuery('(max-width:1280px)');
  const isLg = useMediaQuery('(max-width:1920px)');

  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderSearch = () => {
    if (isXs || isSm) {
      return (
        <Tooltip title="Search" arrow>
          <IconButton onClick={handleMenuClick}>
            <ManageSearchIcon />
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <TextField
        placeholder="Search tests/packages"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
  };


  const renderLogo = () => {
    let height;
    if (isXs) height = '60px';
    else if (isSm) height = '75px';
    else if (isMd) height = '85px';
    else height = '110px';

    return (
      <img
        style={{ height }}
        src="https://lupindiagnostics.com/assets/images/Lupin%20Logo-01.svg"
        alt="Lupin Diagnostics Logo"
      />
    );
  };


  const renderLocationButton = () => {
    if (isMd || isLg) {
      return (
        <Button
          startIcon={<LocationOnIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: 'black', textTransform: 'capitalize' }}
        >
          Mumbai
        </Button>
      );
    }
    return null;
  };

  // Render center locator button
  const renderCenterLocator = () => {
    const content = isXs || isSm ? (
      <Tooltip title="Locator" arrow>
        <ApartmentIcon />
      </Tooltip>
    ) : (
      <Button
        startIcon={<ApartmentIcon />}
        sx={{ color: 'black', textTransform: 'capitalize' }}
      >
        Center Locator
      </Button>
    );

    return <Box>{content}</Box>;
  };

  // Render cart button
  const renderCart = () => {
    const content = isXs || isSm ? (
      <Tooltip title="Cart" arrow>
        <ShoppingCartIcon />
      </Tooltip>
    ) : (
      <Button
        sx={{ color: 'black', textTransform: 'capitalize' }}
        startIcon={
          <Badge variant="dot" color="secondary" overlap="circular">
            <Tooltip title="Cart" arrow>
              <ShoppingCartIcon />
            </Tooltip>
          </Badge>
        }
      >
        Cart
      </Button>
    );

    return <Box>{content}</Box>;
  };

  // Render user login button
  const renderUserLogin = () => {
    const content = isXs || isSm ? (
      <Tooltip title="User" arrow>
        <PersonIcon />
      </Tooltip>
    ) : (
      <Button
        variant="contained"
        startIcon={<PersonIcon />}
        sx={{ backgroundColor: '#2CCE6C' }}
      >
        Customer Login
      </Button>
    );

    return <Box>{content}</Box>;
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box>{(isXs || isSm) && <AppDrawer />}</Box>
      <Box>{renderLogo()}</Box>
      <Box>{renderLocationButton()}</Box>
      <Box>{renderSearch()}</Box>
      <Box>{renderCenterLocator()}</Box>
      <Box>{renderCart()}</Box>
      <Box>{renderUserLogin()}</Box>

      {/* Search Menu for small screens */}
      {(isXs || isSm) && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <TextField
              placeholder="Search tests/packages"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ManageSearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
};

export default Header;