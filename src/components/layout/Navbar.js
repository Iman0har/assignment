import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import { Link } from 'react-router-dom';






export const  Navbar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
    
         
      
          <Link to="/">  <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },marginLeft: 60,textUnderline:"none",color:"white"}}
          >
            Employees
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}