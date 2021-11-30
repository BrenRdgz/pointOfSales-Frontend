import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link, NavLink} from "react-router-dom";
import React from "react";
import Stack from '@mui/material/Stack';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
      <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
  spacing={8}
>
          
          <Link to="/"> <h2>Store</h2> </Link>
          <Link to="/sales"><h2>Sales</h2></Link>
                <NavLink to="/dashboard"><h2>Dashboard</h2></NavLink> 
        </Stack>
      </AppBar>
      </Box>
  );
}
