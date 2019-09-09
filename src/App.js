import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

const word = "Hello";
export default class App extends Component {
  render() {
    return (
      <div>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </div>
    );
  }
}

