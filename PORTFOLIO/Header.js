import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
//import logo from './logo.png';
import {Link} from 'react-router-dom';
//import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar sx={{backgroundColor:"white"}}>
    <Toolbar>
    
    <h1>🏡St.Joseph's Matric Higher Secondary School</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'purple'>
    <Link to="/Home"><Tab label="⌂ Home" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/Aboutus"><Tab label="🏆About Us" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/ParentCorner"><Tab label="✍Parent's Corner" sx={{color:'purple',textDecoration:'none',}} /></Link>
    <Link to="/Academics"><Tab label="🏆Academics" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/Contact"><Tab label="☎Contact" sx={{color:'purple',textDecoration:'none'}}/></Link>
    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent