
import {useEffect} from 'react' 
import { Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import NavBar from './NavBar'
import Contact from './pages/Contact'
import EandE from './pages/EandE'
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
    handleHashChange(); // handle initial load

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


      <div id='education-and-experience'>
      <EandE/> </div> 

      <div id='contact'>
      <Contact/></div>

     </div>
 
    </>
  )
}

export default App
