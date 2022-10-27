import styled, { css } from 'styled-components'
// import {Button} from './StyledPrompt';

const ButtonPair = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid navy;
  text-transform: uppercase;
  color: navy;
  font-size: 20px;
  height: ${props => props.small ? 30 : 45}px;
  width: ${props => props.small ? 45 : 90}px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: navy;
    color: white;
    font-size: 20px;
    text-align: center;
  `}
`;

const Container = styled.div`
  text-align: center;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`
const HeaderPair = () => (
    <Container>
        <ButtonPair>Help</ButtonPair>
        <ButtonPair primary>Exit</ButtonPair>
    </Container>
);

export default HeaderPair;