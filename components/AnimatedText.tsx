import React from 'react'
import {animate, motion} from "framer-motion"

const quote ={
  initial:{
    opacity: 1,
  },
  animate:{
    opacity: 1,
    transition:{
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const single = {
  initial:{
    opacity: 0,
    y:50,
  },
  animate:{
    opacity: 1,
    y:0,
    transition:{
      duration: 1,
    }
  }
}

interface Props {
  text: string;
  className?: string;
}

export const AnimatedText = (props: Props) => {
  return (
    <div className= "animation">
        <motion.h1 className= {props.className}
        variants={quote}
        initial= "initial"
        animate="animate">
            {
                props.text.split(" ").map((word, index)=>
                <motion.span key={word+'-'+index} style={{display: "inline-block"}}
                variants={single}
               >{word}&nbsp;</motion.span>)
            }
        </motion.h1>
    </div>
  )
}

