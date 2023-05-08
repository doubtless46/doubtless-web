import React from "react";
import profile from "./Public/profile.png";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="Phead">
        About
        <span>Me</span>
      </h2>
      <div className="about-img">
        <Image src={profile} alt="Vaibhav gupta" className="image" />
        <span className="circle-spin"></span>
      </div>
      <div
        className="about-content"
        style={{
          margin: "0.5rem 0 ",
          alignItems: "baseline",
          textDecoration: "bold",
          fontSize: "larger",
          color: "#8ceef2",
        }}
      >
        <h1>Full Stack Developer</h1>
        <p>
        Hi, My Name is Vaibhav Gupta , currently in Second Year to be grad with a Bachelor's of Technology in Computer Science and Engineering. Always up for open-source collaboration and learning new things. Keen to attend events , conferences , participating in hackathons , network with people and build communities. currently building <a href="https://linktr.ee/Devsource" style={{textDecoration: "none", color:"#ff7474"}}> @DevsourceCommunity</a> to make all the developers out there stay updated about opportunities. My Current Goals are to become a Full stack developer and contribute to the community.
        </p>
      </div>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="outlined" size="medium">
          <Link
            href="/Contact"
            style={{ color: "#8ceef2", textDecoration: "none" }}
          >
            Read More
          </Link>
        </Button>
      </Box>
    </section>
  );
};

export default About;
