import React, {useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FadeInUp = ({children}) => {
  const [ref, inView] = useInView({triggerOnce:true})
  const fadeInUp = useAnimation();
  const variants = {
    hiddenUp:{
      opacity:0,
      y:-160,
      transition:{
        duration:1,
        delay:5
      }
    },
    fadeInY:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
      }
    }
  }
  useEffect(() => {
    if(inView){
      fadeInUp.start('fadeInY')
    }
    if(!inView){
      fadeInUp.start('hiddenUp')
    }
  }, [inView,fadeInUp])

  return (
    <motion.div
      ref={ref}
      animate={fadeInUp}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeInUp
