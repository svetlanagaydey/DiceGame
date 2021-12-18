import React from 'react';
import Dice from './Components/Dice/Dice.jsx';
import Player from './Components/Player/Player.jsx';


class App extends React.Component {

  render() {
    return (
      <div>
       <Dice />
       <Player />
      </div>
    );
  }
}

export default App;
