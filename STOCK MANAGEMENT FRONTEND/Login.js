import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/login.css'
export default function() {
  return (
    <div>

        <form  className='login' action='http://localhost:3000/Home'>
      
        <center>
        <h1 style={{color:'purple',fontFamily:'brush script mt'}}>Login</h1><br></br>
        <label><bold>Email</bold></label><br></br>
        <br></br>
        <bold>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="email" required /><br /></bold>
        <br></br>
        <label style={{color:"black"}}>Password</label><br></br>
        <br></br>
        <TextField id  ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
        </form>

    </div>
  )
}


