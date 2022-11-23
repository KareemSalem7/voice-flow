import styled from 'styled-components';
import {chosenPrompt, activeTab, types} from './StyledHeader.js'
import '../styleSheets/sass/StyledHeader.scss'
import React from 'react';
import { OutterRect, InnerRect, outterTextStyle, innerTextStyle } from './StyledConstants.js';

var CurrentMessage = {[types[0]]: " - Hello, here are some things I can help you with:",[types[1]]: "- Hi, here are some things I can help you with:"}




// display outter rectangle then inner rectangle inside it
export const StyledRect = () => (
    <OutterRect className="container" style={outterTextStyle}>
        <div style={{fontWeight: 'bold'}}>
            {activeTab} {CurrentMessage[activeTab]}
        </div>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt[0] }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt[1] }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt[2] }
        </InnerRect>
    </OutterRect>
);
 
export default StyledRect;
