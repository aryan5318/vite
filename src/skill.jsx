import { IoLogoJavascript } from "react-icons/io";
import { MdCss } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import './Skills.css'
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
function Square({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      {children}
    </motion.div>
  );
}
function Skill(){
 
    return(
        <>
         <div className="responsive">
         <h1 className="span">&lt; Skills<span>&Tools</span> /&gt;</h1>
         
        <div className="skill-container">
           
       
      <Square><IoLogoJavascript size={100} color="yellow" className="skill-icon" /></Square>
      <Square> <MdCss size={100} color="#FF00FF" className="skill-icon" /></Square>
      <Square><FaHtml5 size={100} color="White" className="skill-icon" /> </Square>
      <Square><FaReact size={100} color="green" className="skill-icon" /></Square>
      <Square><FaNode size={100} color="yellow" className="skill-icon" /></Square>
      <Square><DiMongodb size={100} color="green" className="skill-icon" /></Square>
    </div>
    </div>
    </>
    )
}
export default Skill