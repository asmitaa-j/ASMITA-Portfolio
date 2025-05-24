import { Container, Box, Typography, CardMedia, Card } from "@mui/material";



function Experience() {
  return (
    <>
    <Box sx={{ height: "100vh", bgcolor: "#000", display:'flex', flexDirection:'column', justifyContent:'center', }}>
      
        <Typography variant="h3" sx={{color:'white', mx:'20px', p:'50px', alignSelf:'flex-start'}}> Experience </Typography>


        <Box sx={{ display:'flex', flexDirection:'column'}}>
          <Typography variant="h4" sx={{color:'#938e8ea4', mx:'20px',  px:'50px', alignSelf:'flex-start'}}> 
            Project
          </Typography> 
          <Typography variant="h5" sx={{color:'white', mx:'20px', px:'50px', pt:'20px' }}>
            Plant Disease Detection Using CNN: Developed a web-based application to detect plant diseases from leaf images using a Convolutional Neural Network (CNN).
            <br/> 
            Tech Stack: Python, TensorFlow/Keras, Streamlit 

          </Typography>
       
        </Box> 

        <Box sx={{ display:'flex', flexDirection:'column', mt:'50px'}}>
           <Typography variant="h4" sx={{color:'#938e8ea4', mx:'20px',  px:'50px', alignSelf:'flex-start'}}> 
            Internship 
          </Typography> 
           
           <Typography variant="h5" sx={{color:'white', mx:'20px', px:'50px', pt:'20px' }}>
            Frontend Development Intern at<a href="https://hostedminds.com/" target="_blank" rel="noopener noreferrer" className="link"> HOSTEDMINDS </a> : 
            <br/>
             <ul>
              <li>Gained hands-on experience in building real-world web applications using modern technologies.</li>
              <li>Successfully contributed to a live Shopify project, fixing bugs and customizing themes.</li> 
              <li>Built a personal portfolio website in React, demonstrating individual learning and creativity.</li> 
              <li>Improved both technical proficiency and professional soft skills.</li>
              <li>Received positive feedback and mentorship from the manager and team members.</li>
             </ul>
          </Typography>

        </Box>
      </Box>
      
    </>
  );
} 
export default Experience