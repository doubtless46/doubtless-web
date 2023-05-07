import React from 'react'
import { motion} from "framer-motion"
import Typewriter from 'typewriter-effect';
interface Props {
  text: string;
  className?: string;
}

export const AnimatedText = (props: Props) => {
  return (
    <div className= "animation">
        <motion.h1 className= {props.className}>
                <Typewriter
               options={{
                 strings: ["Full Stack Developer",props.text],
                 autoStart: true,
                 loop: true,
               }}
             />
        </motion.h1>
    </div>
  )
}

