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
  return (
    <div className="App">
      <Header>React Wars</Header>
      <StarWarsList></StarWarsList>
    </div>
  );
}

export default App;
