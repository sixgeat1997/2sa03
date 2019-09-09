import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';


export default class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="hello" />
      </div>
    );
  }

}

