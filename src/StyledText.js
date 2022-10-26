import React from "react";
// import styles from "./StyledText.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
    padding-top: 1px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};

    p {
        font-size: 25px;
        text-align: center;
    }
`;

const StyledText = () => (    
    <StyledDiv>
        <p> Here are your best first prompts curated on the transcript data provided, </p>
    </StyledDiv>
);

export default StyledText;