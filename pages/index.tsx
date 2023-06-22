import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "components/Header/Header";
import {Container }from '@mui/material'
import { ThemeProvider } from '@mui/material';
import theme from "assets/theme";
import Footer from "components/Footer";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
     <Container>
        <Navbar/>
        <Header/>
        <Footer/>
     </Container>
    </ThemeProvider>
  );
}
