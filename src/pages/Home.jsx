import { Container, Box, Typography, CardMedia, Card } from "@mui/material";
import Img from "../assets/photo.png"; 
import ShinyText from './ShinyText';

function Home() {
  return (
    <>
      <Box sx={{ height: "100vh", bgcolor: "#000", display:'flex' }}>
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
                }, display:'inline', width:"420px" }}>
            Helloo!! <br />This is  <ShinyText text="Asmita :)" disabled={false} speed={2} className='custom-class' />
          </Typography>
          <Typography variant="h2" sx={{ color: "#fff" , display:'flex', }}>
           I am a  
           
                 </Typography> <Typography variant="h2" sx={{ color: "#fff" ,  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05) ",
                }, display:'inline', width:"425px" }}> <ShinyText  text="Web Developer" disabled={false} speed={2} className='custom-class' /></Typography>
                  
         
        </Box>
      </Box>
    </>
  );
}
export default Home;
