import React, {useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

  const variants = {
    visible:{
      opacity:1,
      transition:{
        duration:0.8,
      }
    },
    hidden:{
      opacity:0,
    },
  }

const FadeIn = ({children}) => {
  const [ref, inView] = useInView({triggerOnce:true})
  const fadeIn = useAnimation()

  useEffect(() => {
    if(inView){
      fadeIn.start('visible')
    }
    if(!inView){
      fadeIn.start('hidden')
    }
  }, [inView,fadeIn])

  return (
    <motion.div
      ref={ref}
      animate={fadeIn}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
