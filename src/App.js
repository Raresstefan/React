import React, { Component } from "react";
import Header from './components/Header';
import Player from "./components/Player";
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

        {
          this.state.players.map(elem => (
              <Player name={elem.name} id={elem.id} />
            ))
        }
  
        
        
      </div>
    );
  }
}

export default App;
