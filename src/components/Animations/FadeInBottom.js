import React, {useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

  const variants = {
    hiddenBottom:{
      opacity:0,
      y:160,
    },
    fadeInY:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
      }
    },
  }

const FadeInBottom = ({children}) => {
  const [ref, inView] = useInView({triggerOnce:true})
  const fadeInBottom = useAnimation();

  useEffect(() => {
    if(inView){
      fadeInBottom.start('fadeInY')
    }
    if(!inView){
      fadeInBottom.start('hiddenBottom')
    }
  }, [inView,fadeInBottom])

  return (
    <motion.div
      ref={ref}
      animate={fadeInBottom}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeInBottom
