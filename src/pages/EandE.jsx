import { Container, Box, Typography, CardMedia, Card, CardContent } from "@mui/material";
import UMIT from "../assets/UMIT.png";
import college from "../assets/12th.png";
import school from "../assets/school.jpg";
function EandE() 
{
    return(<> 
    <Box sx={{ height: "100vh", bgcolor: "#000", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
    <Typography variant="h3" sx={{color:'white', mx:'20px', p:'50px', alignSelf:'flex-start'}}> Education </Typography>
    <Box sx={{ width:'100%',bgcolor: "#000", display:'flex', justifyContent:'center', alignItems:'center' }}> 


    <Card sx={{display:'flex', width:'30%', bgcolor:' #b5b5b5a4'}}>
       <CardMedia component="img"
                   
                     image={UMIT} sx={{width:'200px', height:'25rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'10px', }}>
          B.Tech of Computer Science and Technology  
        </Typography> 
        <Typography variant="h5" sx={{ color: "black",mb:'10px', }}>
          from Usha Mittal Institute of Technology, SNDT(WU), Mumbai </Typography> 
              <Typography variant="h6" sx={{ color: "black", }}>
              2021-2025  </Typography>
       </CardContent>
    </Card>

    <Card sx={{display:'flex', width:'30%', mx:'20px', bgcolor:' #b5b5b5a4'}}>
       <CardMedia component="img"
                    
                     image={college} sx={{width:'200px', height:'25rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'10px', }}>
         Higher Secondary Education

        </Typography> 
        <Typography variant="h5" sx={{ color: "black",mb:'10px', }}>
          from Shiv. Chattrapati College, Aurangabad  </Typography> 
           <Typography variant="h6" sx={{ color: "black", }}>
          2019-2021  </Typography> 
       </CardContent>
    </Card> 

    <Card sx={{display:'flex', width:'30%', bgcolor:' #b5b5b5a4'}}>
       <CardMedia component="img" image={school} sx={{width:'200px', height:'25rem'}}></CardMedia> 
       <CardContent>
        <Typography variant="h4" sx={{ color: "black", mb:'20px', }}>
        Secondary Education
        </Typography> 
        <Typography variant="h5" sx={{ color: "black",mb:'10px', }}>
          from St. Xavier's High School, Aurangabad  </Typography> 
          <Typography variant="h6" sx={{ color: "black", }}>
          Year of Passing: 2019  </Typography> 
       </CardContent>
    </Card>
    </Box>
    </Box>
    </>)
} 
export default EandE 
