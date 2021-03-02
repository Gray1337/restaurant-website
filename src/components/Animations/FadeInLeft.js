import React, {useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

  const variants = {
    hiddenUp:{
      opacity:0,
      y:-160,
    },
    hiddenBottom:{
      opacity:0,
      y:160,
    },
    hiddenLeft:{
      opacity:0,
      x:-360,
    },
    hiddeRight:{
      opacity:0,
      x:360,
    },
    fadeInX:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        delayChildren: 5,
        staggerChildren: 0.5
      }
    },
    fadeInY:{
      y:0,
      opacity:1,
      transition:{
        duration:1
      }
    },
    visible:{
      opacity:1,
      transition:{
        duration:1
      }
    },
    hidden:{
      opacity:0,
      transition:{
        duration:1
      }
    },
  }

const FadeInLeft = ({children}) => {
  const [ref, inView] = useInView({triggerOnce:true})
    const fadeInLeft = useAnimation();

    useEffect(() => {
    if(inView){
      fadeInLeft.start('fadeInX')
    }
    if(!inView){
      fadeInLeft.start('hiddenLeft')
    }
  }, [inView,fadeInLeft])

  return (
    <motion.div
      ref={ref}
      animate={fadeInLeft}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeInLeft
