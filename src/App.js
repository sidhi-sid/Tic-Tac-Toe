import React from 'react';
import Game from './components/Game'
import './App.css';

//class component is used instead of functional component
class App extends React.Component {
  render(){
    return (
      <Game/>
    )
  }
}

export default App;
