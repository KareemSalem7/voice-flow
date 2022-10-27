import React, {useState} from "react";
import styled from 'styled-components';

const theme = {
    blue: {
        default: '#3f51b5',
        hover: '#283593'
    },
    pink :{
        default: '#e91e63',
        hover: '#ad1457'
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${props => theme[props.theme].default}$;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

Button.defaultProps = {
    theme: "blue"
};

function clickMe(){
    alert('You clicked me!');
}

// const ButtonToggle = styled(Button)`
//     opacity: 0.7;
//     ${({ active })} => active && `
//         opacity: 1;
//     `}
// `;

const types = ['Prompt A', 'Prompt B', 'Prompt C'];

function ToggleGroup() {
    const [active, setActive] = useState(types[0]);
    return (
        <div>
            {types.map(type => (
                <Button>
                    {type}
                </Button>
            ))}
        </div>
    );
}

const Tab = styled.button`
    padding: 10px 60px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    ${({ active }) =>
        active &&
        `
        border-bottom:2px solid black;
        opacity: 1;
    `}
`;

function TabGroup(){
    const [active, setActive] = useState(types[0]);
    return (
        <>
            <div>
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}
            </div>
            <p> Your prompt selection is: {active} </p>
        </>
    );
}
  

export default function App(){
    return (
        <>
        <div>
            <Button onClick={clickMe}>
                Button
            </Button>
        </div>
            <div>
            <Button theme= "pink" onClick={clickMe}>
                Pink theme
            </Button>
        </div>
        <TabGroup/>
        </>
    );
}
