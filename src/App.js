import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PersonScore from "./components/golfplayer"
import Col from 'react-bootstrap/Col';
import Hero from './components/Hero';
import GolfStats from './components/GolfStats'

function App() {
  return (
  <div className="App">
      <Container>
        <Hero/>
      <GolfStats/>
      </Container>
  </div>
  );
}

export default App;
