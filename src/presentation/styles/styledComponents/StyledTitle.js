import styled from 'styled-components';

//set styled attributes of div surronding text
export const StyledDiv = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};
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
 
// define structure and css attributes for the title 
export function StyledTitle() {    
  <StyledDiv style={{fontSize: 40, fontWeight: 'bold', marginTop: 30}}>
      <p> Further Into Prompt Suggester </p>
  </StyledDiv>
};