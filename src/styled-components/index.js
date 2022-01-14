// Styled components

import styled from "styled-components";
import {Link} from 'react-router-dom'

export const CardDeck = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 0.75rem;
  column-gap: 0.75rem;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  flex: 0 1 24%;
  background-color: white;
  box-sizing: border-box;
  padding: 0.25rem;
  border: 1px solid black;
  border-radius: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  @media (max-width: 768px) {
    flex: 0 1 49%;
  }
  @media (max-width: 480px) {
    flex: 0 1 80%;
  }
`;

export const InputButton = styled.input`
  background-color: #346dc9;
  color: white;
  padding: 0.2em;
  border: none;
  font-size: 1.2em;
  width: 200px;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 60vw;
  margin: 0.5em;
`;

export const Label = styled.label`
  font-size: 1.2em;
`;
export const TextArea = styled.textarea`
  height: 200px;
  margin: 0.5em;
  width: 70vw;
`;

export const Block = styled.div`
  display: grid;
  width: 100vw;
`;

export const Select = styled.select`
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #dddddd")};
  font-size: 1.2em;
  width: 60vw;
`;
export const Option = styled.option`
  font-size: 1.2em;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  text-decoration: none;
  margin: 1em;
  padding: .2em .5em;
  color: blue;
  &:hover{
    color: orange;
  }
`