import { motion } from "framer-motion";
import * as animationConstants from "./AnimationConstants.js";
import NLUlogo from '../../assets/NLULogoTransparentWhite.png';
import '../EnablePage.scss';

export function AnimatedLogo() {
    return (
        <motion.div className="pos_abs top_nav" variants={animationConstants.stagger}>
            <motion.img src={NLUlogo} alt="NLUlogo" height="100vh" variants={animationConstants.animateNLU} />
        </motion.div>)
}