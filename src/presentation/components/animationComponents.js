import { motion } from "framer-motion";
import '../styles/UploadPage.scss';

let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const sidebarDots = {
    initial: {
      x: "-100vw"
    },
    animate: {
      x: "-50vw",
      transition: {
        duration: .2, ...transition
      }
    }
  };

  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      }
    }
  };

export function SidebarDots(props) {
    if (props.i === 1) {
    return(
        <motion.div className="dots" variants={stagger}>
            <motion.span className="active" variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
          </motion.div>
    )} else if (props.i === 2) {
        return(
        <motion.div className="dots" variants={stagger}>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span className="active" variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
          </motion.div>)
    } else {
        return(
    <motion.div className="dots" variants={stagger}>
        <motion.span variants={sidebarDots}></motion.span>
        <motion.span variants={sidebarDots}></motion.span>
        <motion.span className="active" variants={sidebarDots}></motion.span>
    </motion.div>)
    }

  }