import React from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";
import styled from "styled-components";

const Header = styled.h1`
color: maroon;
font-family: 'Bungee Inline', cursive;
font-size: 80px;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>React Wars</Header>
      <StarWarsList></StarWarsList>
    </div>
  );
}

export default App;
