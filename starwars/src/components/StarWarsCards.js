import React from "react";
import styled from "styled-components";

const Cards = styled.div`
display: inline-block;
border: 4px solid black;
margin: 25px;
text-align: center;
border-radius: 10px;
width: 50%;
`

const StarWarsCards = props => {
  return(
    <Cards>
      <h1> Name: {props.name}</h1>
      <h2> Birth_Year: {props.birth_year}</h2>
      <h2> Gender: {props.gender}</h2>
      <h2> Created: {props.created}</h2>
      <h2> Eye Color: {props.eye_color}</h2>
    </Cards>
  )
}

export default StarWarsCards; 