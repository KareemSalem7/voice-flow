import { motion } from 'framer-motion';
import { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styledComponents/StyledHeader'

export class HoverButtonNoClick extends Component {
    render() {
        return (
            <Link to={this.props.link}>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Button theme={this.props.theme}>
                        {this.props.text}
                    </Button>
                </motion.div>
            </Link>)
    }
}