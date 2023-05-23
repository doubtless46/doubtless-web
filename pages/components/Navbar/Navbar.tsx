import Link from 'next/link'
import {Box,Typography,Button} from '@mui/material'
import { makeStyles } from '@mui/styles';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import Navitem from '../Navitem';
const navitems=['Home','About','Contact'];
const Navbar = () => {
  const[darkmode,setDarkMode]=useState(false);
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',height:'50', alignItems:'center',pt:'0.8em',bgcolor:''}}>
      <Box>
       <Typography variant='h1'>Doubtless</Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md:'flex' },justifyContent:'space-around',alignItems:'center'}}>
         {navitems?.map((item,index)=>(
                   <Navitem index={index} item={item}/>
         ))}
         
         <Button sx={{ml:'0.5em',bgcolor:'#0f766e'}} variant="contained">Get Started</Button>
         <Box sx={{ml:'0.9em'}} onClick={()=>{
          setDarkMode(!darkmode)
         }}> 
          {!darkmode? <WbSunnyOutlinedIcon/> :<DarkModeOutlinedIcon/>}
         </Box>
      </Box>
    </Box>
  )
}

export default Navbar