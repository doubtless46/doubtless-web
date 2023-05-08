import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const MotionLink = motion(Link);

function Navbar() {
  return (
    <header className="nav">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h2>
        <div className="logo">
          <MotionLink className="Logo" href="/" whileHover={{
            backgroundColor : ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition : {duration: 1, repeat : Infinity}
          }}>
            VG
            </MotionLink>
        </div>
        </h2>
      <div className="social">
        <MotionLink whileHover={{ y: -3}} whileTap={{scale : 0.9}} className="so" target="_blank" href="https://github.com/Vaibhavg4651">
          <GitHubIcon/>
        </MotionLink>
        <MotionLink whileHover={{ y: -3}} whileTap={{scale : 0.9}} className="so" target="_blank" href="https://www.linkedin.com/in/vaibhav-gupta-7a2992227/">
          <LinkedInIcon/>
        </MotionLink>
        <MotionLink whileHover={{ y: -3}} whileTap={{scale : 0.9}} className="so"  target="_blank"href="https://twitter.com/vaibhavg4651">
          <TwitterIcon/>
        </MotionLink>
        <MotionLink  whileHover={{ y: -3}} whileTap={{scale : 0.9}} className="so"  target="_blank"href="https://www.instagram.com/vaibhavv.io/">
          <InstagramIcon/>
        </MotionLink>
      </div>
    </header>
  );
}

export default Navbar;
