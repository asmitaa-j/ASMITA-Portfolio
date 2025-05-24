import { Container, Box, Typography, CardMedia, Card } from "@mui/material";
import Img from "../assets/photo.png"; 
import ShinyText from './ShinyText'; 
import  git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom"; 
import insta from "../assets/insta.png";



function Home() {
  return (
    <> 
   
    
      <Box sx={{ height: "100vh", bgcolor: "#000", display:'flex', mb:'0'}}>
        <Box sx={{ width:'50%', display:'flex', justifyContent: 'center', alignItems: 'center', mb:'80px' }}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              overflow: "hidden",
              pt: 4,
              "&:hover": {
                boxShadow: "0 0 20px rgba(173, 162, 162, 1)",
              },
            }}
          >
            <CardMedia
              component="img"
              width="100%"
              image={Img}
              alt="Animated Image"
              sx={{
                transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                },
              }}
            ></CardMedia>
          </Box> 
        </Box> 
        <Box sx={{width:'50%', display:'flex', justifyContent: 'center', alignItems: '', flexDirection:'column'}}>
          <Typography variant="h2" sx={{ mb:'10px',color: "#fff", transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05) ",
                }, display:'inline', width:"450px" }}>
            Helloo!! <br />This is  <ShinyText text="Asmita :)" disabled={false} speed={2} className='custom-class' />
          </Typography>
          <Typography variant="h2" sx={{ color: "#fff" , display:'flex', }}>
           I am a  
           
                 </Typography> <Typography variant="h2" sx={{ color: "#fff" ,  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05) ",
                }, display:'inline', width:"425px" }}> <ShinyText  text="Web Developer" disabled={false} speed={2} className='custom-class' /></Typography>



         <Box sx={{ display:'flex', justifyContent:'flex-start', alignItems:'center',  mt:"30px"} }>
          <CardMedia component={Link} to='https://github.com/asmitaa-j' image={git} sx={{ bgcolor:'white', width:'65px', height:'4rem', borderRadius:'50px', m:'10px',  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  bgcolor: '#938e8ea4'
                }, }}></CardMedia>
          <CardMedia component={Link} to="https://www.linkedin.com/in/asmita-jadhav-24b00b22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" image={linkedin } sx={{ bgcolor:'white', width:'70px', height:'4rem', borderRadius:'50px', m:'10px', transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  bgcolor: '#938e8ea4'
                },}}></CardMedia>
          {/* <CardMedia component={Link} to="https://www.instagram.com/filmmbaker?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" image={insta} sx={{ bgcolor:'white', width:'70px', height:'4rem', borderRadius:'50px', m:'10px', transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  bgcolor: '#938e8ea4'
                },}}></CardMedia> */}
          </Box>         
         
        </Box> 
</Box>
          

      
    </>
  );
}
export default Home;
