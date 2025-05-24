import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Box
} from '@mui/material';


function Contact(){

    const handleSubmit = (e) => {
    e.preventDefault();
    
   alert('Form submitted');
  };

    return (<>
    
<Box sx={{ height: "100vh", bgcolor: "#000", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
 <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', mb:'30px' }}>
      <Card sx={{ maxWidth: 600, width: '100%', bgcolor: '#b5b5b5a4',  }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  required
                  variant="outlined" sx={{ bgcolor: 'white', borderRadius: '4px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  required
                  variant="outlined" sx={{ bgcolor: 'white', borderRadius: '4px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined" sx={{ bgcolor: 'white', borderRadius: '4px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  variant="outlined" sx={{ bgcolor: 'white', borderRadius: '4px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth  sx={{ bgcolor: 'black'}}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>

</Box>

    </>)
}

export default Contact 
