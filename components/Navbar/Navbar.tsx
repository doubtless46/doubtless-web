import { Box, Typography, IconButton } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from "react";
import Navitem from "../Navitem";
import ButtonComp from "../ButtonComp";

const navitems = ["Home", "About", "Doubtpage"];

const Navbar = () => {
  const [darkmode, setDarkMode] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobilemenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
        alignItems: "center",
        pt: "0.8em",
        bgcolor: "white",
      }}
    >
      <Box>
        <Typography variant="h1">DoubtLess</Typography>
      </Box>

      {/* Mobile navbar */}
      <Box
        sx={{
          bgcolor: 'white',
          display: { xs: "flex", md: "none" },
          transition: '1s all ease' ,
          flexDirection: "row",
          alignItems: "center",
          w: 250,
        }}
      >
        <IconButton onClick={toggleMenu}>
          {mobilemenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </IconButton>

        {mobilemenu && (
          <Box sx={{ position: 'absolute', top: 50, right: '0', display: 'flex', flexDirection: "column", alignItems: "center", w: '100%',p:'2em',bgcolor:'white',transition:'background-color 0.3s ease'}}>
            {navitems?.map((item, index) => (
              <Navitem index={index} item={item} key={index} />
            ))}
            <ButtonComp content='Get Started' />
          </Box>
        )}
      </Box>

      {/* Desktop navbar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navitems?.map((item, index) => (
          <Navitem index={index} item={item} key={index} />
        ))}

        <ButtonComp content='Get Started' />

        <Box
          sx={{ ml: "0.9em" ,cursor:'pointer'}}
          onClick={toggleDarkMode}
        >
          {!darkmode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

