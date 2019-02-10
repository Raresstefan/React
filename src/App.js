import React, { Component } from "react";
import Header from './components/Header';
import "./App.css";


class App extends Component {
  state = {
    players: [
      { name: "Mario", id: 0 },
      { name: "Alex", id: 1 },
      { name: "Andrei", id: 2 },
      { name: "Ioana", id: 3 }
    ]
  };

  render() {
    return (
      <div class="scoreboard">
        <Header head="Scoreboard" />
        
        <div class="player">
          <span class="player-name">
            <button class="remove-player">✖</button>Guil
          </span> 
          <div class="counter">
            <button class="counter-action decrement">-</button>
            <span class="counter-score">0</span>
            <button class="counter-action increment">+</button>
          </div>
        </div>
        <div class="player">
          <span class="player-name">
            <button class="remove-player">✖</button>Treasure
          </span>
          <div class="counter">
            <button class="counter-action decrement">-</button>
            <span class="counter-score">0</span>
            <button class="counter-action increment">+</button>
          </div>
        </div>
        <div class="player">
          <span class="player-name">
            <button class="remove-player">✖</button>Ashley
          </span>
          <div class="counter">
            <button class="counter-action decrement">-</button>
            <span class="counter-score">0</span>
            <button class="counter-action increment">+</button>
          </div>
        </div>
        <div class="player">
          <span class="player-name">
            <button class="remove-player">✖</button>James
          </span>
          <div class="counter">
            <button class="counter-action decrement">-</button>
            <span class="counter-score">0</span>
            <button class="counter-action increment">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
