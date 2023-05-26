import Link from "next/link";
import { Box, Typography, Button ,IconButton} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from "react";
import Navitem from "../Navitem";
import ButtonComp from "../ButtonComp";
const navitems = ["Home", "About", "Contact"];
const mobilemenu = (
  <Box
    sx={{
      display: { xs: "flex", md: "none" },
      flexDirection: "column",
      alignItems: "center",
      w: 250,
    }}
  >
    {navitems?.map((item: string, index: number) => (
      <Navitem index={index} item={item} key={index} />
    ))}
  </Box>
);

const Navbar = () => {
  const [darkmode, setDarkMode] = useState(false);
  const[mobilemenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    setMobileMenu(!mobilemenu)
  const toggleDarkMode=()=>{
    setDarkMode(!darkmode)
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "50",
        alignItems: "center",
        pt: "0.8em",
        bgcolor: "white",
      }}
    >
      <Box>
        <Typography variant="h1">Doubtless</Typography>
      </Box>
      {/* THis is the mobile navbar that will be displayed on xs screens */}
      <Box
        sx={{
          bgcolor:'white',display: { xs: "flex", md: "none" },flexDirection: "row",alignItems: "center",w: 250,
        }}
      > 
      {/* mobile menu bar */}
       <IconButton onClick={toggleMenu}>
         {mobilemenu ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
       </IconButton>
      {mobilemenu && <Box sx={{position:'absolute',top:50,right:'0',display:'flex',flexDirection: "column",alignItems: "center",w:'100%', transition:'1s position ease-in-out'}}>
         {navitems?.map((item: string, index: number) => (
          <Navitem index={index} item={item} key={index} />
         ))}
         <ButtonComp content='Get Started'/>
       </Box>}
      </Box>
      {/* This is the desktop Navbar that will be displayed in md screens/desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navitems?.map((item: string, index: number) => (
          <Navitem index={index} item={item} key={index} />
        ))}

       <ButtonComp content='Get Started'/>
        <Box
          sx={{ ml: "0.9em" }}
          onClick={toggleDarkMode}
        >
          {!darkmode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
