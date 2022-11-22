import styled from 'styled-components';
import {chosenPrompt, activeTab} from './StyledHeader.js'
import '../styleSheets/sass/StyledHeader.scss'
import React from 'react';
import { OutterRect, InnerRect, outterTextStyle, innerTextStyle } from './StyledConstants.js';

// display outter rectangle then inner rectangle inside it
export const StyledRect = () => (
    <OutterRect className="container" style={outterTextStyle}>
        <div style={{fontWeight: 'bold'}}>
            {activeTab}
        </div>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt }
        </InnerRect>
    </OutterRect>
);
 
export default StyledRect;
