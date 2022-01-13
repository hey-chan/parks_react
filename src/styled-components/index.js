// Styled components

   
import styled from 'styled-components'
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
    width: 95%
    
    }
    
    @media (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
    }
  `

export const Card = styled.div`
    flex: 0 1 24%;
    background-color: white;
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px solid black;
    border-radius: 10px;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2)
    }
    @media (max-width: 768px) {
     flex: 0 1 49%
    }
    @media (max-width: 480px) {
     flex: 0 1 80%
    }
`