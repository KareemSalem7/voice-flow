import React from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as animationConstants from './AnimationConstants.js'
import '../styleSheets/css/Modal.css'


const Modal = ({ showModal }) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={animationConstants.backdrop}
                    initial="hidden"
                    animate="visible">
                    <motion.div className="modal" variants={animationConstants.modal}>
                        <p>Time to make your chatbot pop!</p>
                        <Link to="/endpage">
                            <button>Make My Prompt!</button>
                        </Link>
                    </motion.div>


                </motion.div>


            )}
        </AnimatePresence>
    )
}

export default Modal