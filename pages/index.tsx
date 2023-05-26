import React from "react";
import Navbar from "components/Navbar/Navbar";
import Navbar from "../components/Navbar/Navbar";
import {Container }from '@mui/material'
import { ThemeProvider } from '@mui/material';
import theme from "assets/theme";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
     <Container>
        <Navbar/>
     </Container>
    </ThemeProvider>
  );
}
