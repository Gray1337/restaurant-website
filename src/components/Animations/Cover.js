import { motion } from "framer-motion";

const Cover = () =>{
  return(
    <motion.div
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:'red',
        position:'absolute',
        top:0,
        right:0,
      }}
      initial={{width:'100%'}} 
      animate={{width:'100%'}} 
      transition={{duration:0.8,ease:'easeOut',delay:1.8}}
    />
  )
}

export default Cover