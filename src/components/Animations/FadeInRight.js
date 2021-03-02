import React, {useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

  const variants = {
    hiddeRight:{
      opacity:0,
      x:360,
    },
    fadeInX:{
      x:0,
      opacity:1,
      transition:{
        duration:1
      }
    }
  }

const FadeInRight = ({children}) => {
  const [ref, inView] = useInView({triggerOnce:true})
  const fadeInRight = useAnimation();

  useEffect(() => {
    if(inView){
      fadeInRight.start('fadeInX')
    }
    if(!inView){
      fadeInRight.start('hiddeRight')
    }
  }, [inView,fadeInRight])

  return (
    <motion.div
      ref={ref}
      animate={fadeInRight}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeInRight
