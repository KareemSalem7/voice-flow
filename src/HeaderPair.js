// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import styled, { css } from 'styled-components'
import {Button} from './StyledPrompt';

const theme = {
  blue: {
      default: '#000080',
      hover: '#283593'
  }
}

const ButtonPair = styled.button`
  background-color: ${props => theme[props.theme].default};
  border-radius: 10px;
  border: 2px solid navy;
  text-transform: uppercase;
  color: navy;
  font-size: 10px;
  line-height: 5%;
  line-width: 5%;
  text-align: center;
  margin: 10px 0px;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  ${props => props.primary && css`
    background: navy;
    color: white;
    font-size: 10px;
    text-align: center;
  `}
`;

ButtonPair.defaultProps = {
  theme: "blue"
};

const Container = styled.div`
  text-align: center;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const HeaderPair = () => (
  <Link to="/helppage">
    <ButtonPair primary >
    <p>Help</p>
    </ButtonPair>
  </Link>
);

export default HeaderPair;