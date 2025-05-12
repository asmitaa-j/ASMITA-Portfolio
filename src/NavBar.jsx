import {Link as RouterLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';


function NavBar() {

    return(
        <>

         <AppBar position="static"  sx={{ px: 8, py:2, bgcolor: 'black' }}>
      <Toolbar disableGutters>
        {/* Logo */}
        <Typography
          variant="h4"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          ASMITA
        </Typography>

      
        <Box >
         <a href="#home">Home</a>
          <a href="#skills"> Skills</a>
          <a href="#education-and-experience">Education & Experience</a> 
          <a href="#contact">Contact</a>
        </Box>
      </Toolbar>
    </AppBar>
        
        </>
    )
} 

export default NavBar