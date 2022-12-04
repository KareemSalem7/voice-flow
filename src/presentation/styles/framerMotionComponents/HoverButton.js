import { motion } from 'framer-motion';
import { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styledComponents/StyledConstants'

export class HoverButtonNoClick extends Component {
    render() {
        return (
            <Link to={this.props.link}>
                <motion.div whileHover={{ scale: 1.2}}>
                    <Button style={{backgroundColor: '#808080', transition: "ease background-color 250ms", hover: {backgroundColor: '#3c6cd7'}}}>
                        {this.props.text}
                    </Button>
                </motion.div>
            </Link>)
    }
}

export class HoverButtonClick extends Component {
    render() {
        return (
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Button onClick={this.props.clickFunction} style={{backgroundColor: '#3c6cd7', transition: "ease background-color 250ms", hover: {backgroundColor: '#3460c4'}}} >
                        {this.props.text}
                    </Button>
                </motion.div>

        )
    }
}

export class HoverButtonGreyClick extends Component {
    render() {
        return (
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Button onClick={this.props.clickFunction} style={{backgroundColor: '#808080', transition: "ease background-color 250ms", hover: {backgroundColor: '#3c6cd7'}}} >
                        {this.props.text}
                    </Button>
                </motion.div>
        )
    }
}