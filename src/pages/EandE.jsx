import { Container, Box, Typography, CardMedia, Card, CardContent } from "@mui/material";
import UMIT from "../assets/image.png";
function EandE() 
{
    return(<> 
    <Typography variant="h3" sx={{color:'white', mx:'20px', p:'20px'}}> Education and Experience </Typography>
    <Box sx={{ height: "80vh", width:'100%',bgcolor: "#000", display:'flex', justifyContent:'center', alignItems:'center' }}> 
 <Card sx={{display:'flex', width:'30%', mx:'20px'}}>
       <CardMedia component="img"
                    
                     image={UMIT} sx={{width:'200px', height:'21rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'10px', }}>
          B.Tech in Computer Science and Technology 
        </Typography> 
        <Typography variant="h5" sx={{ color: "black",mb:'10px', }}>
          from Usha Mittal Institute of Technology  </Typography> 
           <Typography variant="h6" sx={{ color: "black", }}>
           2021-2025  </Typography> 
       </CardContent>
    </Card> 
    
    <Card sx={{display:'flex', width:'30%'}}>
       <CardMedia component="img"
                   
                     image={UMIT} sx={{width:'200px', height:'21rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'10px', }}>
          B.Tech in Computer Science and Technology 
        </Typography> 
        <Typography variant="h5" sx={{ color: "black",mb:'10px', }}>
          from Usha Mittal Institute of Technology  </Typography> 
              <Typography variant="h6" sx={{ color: "black", }}>
              2021-2025  </Typography>
       </CardContent>
    </Card>
   

    <Card sx={{display:'flex', width:'30%'}}>
       <CardMedia component="img"
                   
                     image={UMIT} sx={{width:'200px', height:'20rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'20px', }}>
          B.Tech in Computer Science and Technology 
        </Typography> 
        <Typography variant="h5" sx={{ color: "black", }}>
          from Usha Mittal Institute of Technology  </Typography> 
       </CardContent>
    </Card>
    </Box>
    </>)
} 
export default EandE