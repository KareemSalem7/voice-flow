import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as animationConstants from './AnimationConstants.js'
import '../styleSheets/css/Modal.css'
import { HoverButtonClick, HoverButtonNoClick } from './HoverButton.js'
import { sendAccount } from "../../../controllers/UserRequests.js";


const Modal = ({ showModal, closer }) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={animationConstants.backdrop}
                    initial="hidden"
                    animate="visible">
                    <motion.div className="modal" variants={animationConstants.modal}>
                        <button type="button" class="btn-close btn-close-white btn-block" aria-label="Close" aria- onClick={closer}></button>
                        <h1>Let's Make Your Chatbot Pop!</h1>
                        <h2>Almost there! Just input your information below and we'll make your prompt for you!</h2>


                        {/* Email Address input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="text" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" required />
                            </div>
                        </motion.div>

                        {/* Password input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="password" id="password" aria-describedby="password" placeholder="Password" required />
                            </div>
                        </motion.div>

                        {/* Diagram ID input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div class="form-group">
                                <input type="text" id="diagramID" aria-describedby="diagramID" placeholder="Diagram ID" required />
                            </div>
                        </motion.div>

                        <div className="modal-HoverButtonNoClick">
                            <HoverButtonClick link="/endpage" clickFunction={sendAccount} text="Make My Prompt!" />
                        </div>
                    </motion.div>


                </motion.div>


            )}
        </AnimatePresence>
    )
}

export default Modal