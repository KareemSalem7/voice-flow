import styled from "styled-components";

// define the outter rect responsible for grey outline of prompt
export const OutterRect = styled.div`
    background-color: #dee4ea;
    padding: 20px;
    border-radius: 5px;
    margin: 30px;
    max-width: 800px;
    box-shadow: 0 0 0 5px  white, 
                0 0 0 10px #dee4ea;
    
    color: ${(props) => props.color};
`;

// define the inner rect responsible for white area with text
export const InnerRect = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    
    color: ${(props) => props.color};
`;

// define css properties for outter text
export const outterTextStyle = {
    color: '#6c7c91',
    fontSize: 50,
};

// define css properties for inner text
export const innerTextStyle = {
    color: '#6c7c91',
    fontSize: 40,
    marginTop: 40
};

// set styled attributes of div surronding text
export const StyledDiv = styled.div`
    background-color: #1fc8db;
    background-image: linear-gradient(180deg, #5784e4 0%, #633366 50%, #3f1243 75%);
    display: left;
    padding: 20px;
    flex-direction: column;
    height: 100vh;
    
    color: ${(props) => props.color};

    p {
        font-size: 30px;
        color: white;
    }
`;
 
//set styled attributes of text including sentences: p, and dot jots: dot
export const StyledText = styled.div`
    padding-left: 20px;
    text-align: left;
    margin-left: 70px;
    margin-right: 70px;
    color: ${(props) => props.color};
 
    p {
        text-align: left;
    }
 
    dot {
      text-align: left;
      float: left;
      margin-left: 40px;
  }
`;

export const theme = {
    blue: {
        default: '#3c6cd7',
        hover: '#3460c4'
    },
    white: {
        default: '#808080',
        hover: '#3c6cd7'
    }
}

export const Button = styled.button`
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    font-size: 30px;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

// Button.defaultProps = {
//     theme: "blue"
// };

export const Tab = styled.button`
    display: flex;
    color: white;
    padding: 20px 30px;
    cursor: pointer;y
    opacity: 0.6;
    background: transparent;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    font-size: 30px;
    
    ${({ active }) =>
        active &&
        `
        border-bottom:2px solid white;
        opacity: 1;
    `}
`;