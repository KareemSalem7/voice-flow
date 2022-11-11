import styled from 'styled-components';
import {chosenPrompt} from '../styledComponents/StyledPrompt.js'

// define the outter rect responsible for grey outline of prompt
const OutterRect = styled.div`
    background-color: #dee4ea;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 0 5px  white, 
                0 0 0 10px #dee4ea;
    
    color: ${(props) => props.color};
`;

// define the inner rect responsible for white area with text
const InnerRect = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    
    color: ${(props) => props.color};
`;

// define css properties for outter text
const outterTextStyle = {
    color: '#6c7c91',
    fontSize: 40,
};

// define css properties for inner text
const innerTextStyle = {
    color: '#6c7c91',
    fontSize: 30,
    marginTop: 30
};

export const StyledRect = () => (
    <OutterRect className="container" style={outterTextStyle}>
        <div style={{fontWeight: 'bold'}}>New Block 1</div>
        <InnerRect className="container" style={innerTextStyle}>
            { chosenPrompt }
        </InnerRect>
    </OutterRect>
);
 
export default StyledRect;
