import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Clear } from './images/clear.svg';

const Container = styled.div`
font-family: 'Arial';
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid;
border-radius: 5px;
max-width: 800px;
background-color: #3c6cd7;
&:hover {
box-shadow: 1px 1px 1px thistle;
}
`;

const TextInput = styled.input`
flex: 1 0;
min-width: 20px;
max-width: 800px;
min-height: 25px;
font-size: inherit;
background-color: white;
padding-left: 5px;
border: 1;
&:focus {
outline: none;
}
`;

const Icon = styled.div`
flex: 0 0;
`;

export const ClearableInput = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <Container>

            {/* Registers users inputting new information and displays text */}
            <TextInput
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />

            {/* Draws the svg X and adds actual clearing functionality. */}
            <Icon>
                <Clear
                    width="20px"
                    height="20px"
                    stroke="black"
                    onClick={() => {
                        setInputValue('');
                    }}
                />
            </Icon>
        </Container>
    );
};