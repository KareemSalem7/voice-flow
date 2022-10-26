import styled, { css } from 'styled-components'

const Button = styled.button`
  display: right;
  background: transparent;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid navy;
  color: navy;
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
`
const StyledButton = () => (
    <Container>
        <Button>Help</Button>
        <Button primary>Exit</Button>
    </Container>
);

export default StyledButton;