import '../styleSheets/sass/StyledHeader.scss'
import React from 'react';
import { OutterRect, InnerRect, outterTextStyle, innerTextStyle } from './StyledConstants.js';




// display outer rectangle then inner rectangle inside it
// pass in intents to be displayed
// note that for now, intents isn't really a flexible name for component reusability
export const StyledRect = ({tabName, intents, message}) => (
    <OutterRect className="container" style={outterTextStyle}>
        <div style={{fontWeight: 'bold'}}>
            {tabName} {message}
        </div>
        <InnerRect className="container" style={innerTextStyle}>
            { intents[0] }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { intents[1] }
        </InnerRect>
        <InnerRect className="container" style={innerTextStyle}>
            { intents[2] }
        </InnerRect>
    </OutterRect>
);
 
export default StyledRect;
