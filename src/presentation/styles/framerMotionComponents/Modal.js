import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as animationConstants from './AnimationConstants.js'
import '../styleSheets/css/Modal.css'
import { HoverButtonClick, HoverButtonNoClick } from './HoverButton.js'
import { createVFBlock } from "../../../controllers/UserRequests.js";
import EndPage from "../../pages/EndPage.js";


const Modal = ({ showModal, closer, currIntent }) => {
    const navigate = useNavigate()
    function redirectToEndPage() {
        createVFBlock(currIntent)
        navigate("/endpage")
    }
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={animationConstants.backdrop}
                    initial="hidden"
                    animate="visible">
                    <motion.div className="modal" variants={animationConstants.modal}>
                        <button type="button" className="btn-close btn-close-white btn-block" aria-label="Close" onClick={closer}></button>
                        <h1>Let's Make Your Chatbot Pop!</h1>
                        <h2>Almost there! Just input your information below and we'll make your prompt for you!</h2>


                        {/* Email Address input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div className="form-group">
                                <input type="text" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" required />
                            </div>
                        </motion.div>

                        {/* Password input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div className="form-group">
                                <input type="password" id="password" aria-describedby="password" placeholder="Password" required />
                            </div>
                        </motion.div>

                        {/* Diagram ID input box. */}
                        <motion.div variants={animationConstants.fadeInUp}>
                            <div className="form-group">
                                <input type="text" id="diagramID" aria-describedby="diagramID" placeholder="Diagram ID" required />
                            </div>
                        </motion.div>

                        <div className="modal-HoverButtonNoClick">
                            <HoverButtonClick clickFunction={redirectToEndPage} text="Make My Prompt!" />
                        </div>
                    </motion.div>


                </motion.div>


            )}
        </AnimatePresence>
    )
}

export default Modal