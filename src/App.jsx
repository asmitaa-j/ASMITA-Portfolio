
import {useEffect} from 'react' 


import Home from './pages/Home' 
import Skills from './pages/Skills'
import NavBar from './NavBar'
import Contact from './pages/Contact'
import EandE from './pages/EandE'
import Experience from './pages/Experience';  
function App() {

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <> 
    <div style={{ }}>
      <NavBar /> 

      <div id='home'>
      <Home /> </div>
     
     <div id='skills' >
      <Skills/></div> 


      <div id='education'>
      <EandE/> </div> 

      <div id='experience'>
      <Experience/></div>

      <div id='contact'>
      <Contact/></div>

     </div>
 
    </>
  )
}

export default App
