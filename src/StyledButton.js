import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid navy;
  color: navy;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: navy;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`
const StyledButton = () => (
    <Container>
        <Button>Button One</Button>
        <Button primary>Button Two</Button>
    </Container>
);

export default StyledButton;