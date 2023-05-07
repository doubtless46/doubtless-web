import Link from "next/link";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProfilePic from "../Public/joker.jpg";
import { AnimatedText } from "pages/components/AnimatedText";

const Index = () => {
  return (
    <div>
      <section className="Main">
        <main className="main">
          <div className="hero">
            <Image
              src={ProfilePic}
              alt="Vaibhav gupta"
              style={{ width: "60%", height: "auto" }}
              className="image" />
          </div>
          <div className="hero">
            <h1 style={{
              textDecoration: "solid",
              color: "#8ceef2",
              fontSize: "3rem"
            }}
            >Hi, I'm Vaibhav</h1>
            <AnimatedText

              text="Turning Vision Into Reality With Code."
              className="heading" />
            <p
              style={{
                margin: "0.5rem 0 ",
                alignItems: "baseline",
                textDecoration: "bold",
                fontSize: "larger",
                color: "#8ceef2",
              }}
            >
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects showcasing my expertise in React.js and web development.
            </p>
            <Box sx={{ "& button": { m: 1 } }}>
              <Button variant="outlined" size="medium">
                <Link href="https://drive.google.com/file/d/14X6WprqCUTkDEnjgZAHT6HhFIXMViSgO/view?usp=sharing" target="_blank" style={{ color: "#8ceef2", textDecoration: "none" }}>Resume</Link>
              </Button>
              <Button variant="outlined" size="medium">
                <Link href="/contact" target="_blank" style={{ color: "#8ceef2", textDecoration: "none" }}>
                  Contact
                </Link>
              </Button>
            </Box>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Index;
