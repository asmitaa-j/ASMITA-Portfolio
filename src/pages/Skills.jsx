
import { Container, Box, Typography, CardMedia, Card } from "@mui/material"; 
import html from "../assets/html.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.png";
import react from "../assets/react.png";
import py from "../assets/py.png";
function Skills(){



    return (<div>
       <Box sx={{ height: "100vh", bgcolor: "#000", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        <Typography variant="h3" sx={{color:'white', mx:'20px', p:'50px', alignSelf:'flex-start'}}>Skills</Typography>

        <Box sx={{  display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
         
         <CardMedia  component="img" image= {html} sx={{ width:'150px', height:'150px', m:'30px',  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                }, }}> 

         </CardMedia> 
         <CardMedia  component="img" image= {css} sx={{ width:'150px', height:'150px', m:'30px',  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                },}}> 

         </CardMedia> 
         <CardMedia  component="img" image= {js} sx={{ width:'150px', height:'150px', m:'30px',   transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                },}}> 

         </CardMedia> 
         <CardMedia  component="img" image= {react} sx={{ width:'150px', height:'150px', m:'30px',  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                }, }}> 

         </CardMedia> 
         <CardMedia  component="img" image= {py} sx={{ width:'150px', height:'150px', m:'30px',  transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1) ",
                }, }}> 

         </CardMedia> 

         C

        </Box>
       </Box>

    

    </div>
    )
} 

export default Skills