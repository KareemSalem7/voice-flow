import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as animationConstants from './AnimationConstants.js'
import '../styleSheets/css/Modal.css'
import { HoverButtonClick, HoverButtonNoClick } from './HoverButton.js'



const Modal = ({ showModal, closer }) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={animationConstants.backdrop}
                    initial="hidden"
                    animate="visible">
                    <motion.div className="modal" variants={animationConstants.modal}>
                        <button type="button" class="btn-close" aria-label="Close" onClick={closer}></button>
                        <p>Time to make your chatbot pop!</p>

                        {/* Email Address input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="text" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" required />
                            </div>
                        </motion.div>

                        {/* Password input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="text" id="password" aria-describedby="password" placeholder="Password" required />
                            </div>
                        </motion.div>

                        {/* Diagram ID input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="text" id="diagramID" aria-describedby="diagramID" placeholder="Diagram ID" required />
                            </div>
                        </motion.div>

                        <div className="modal-HoverButtonNoClick">
                            <HoverButtonNoClick link="/endpage" text="Make My Prompt!" />
                        </div>
                    </motion.div>


                </motion.div>


            )}
        </AnimatePresence>
    )
}

export default Modal