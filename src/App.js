import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

export default class App extends Component {
  render() {
    return (
      <div>
        <CharacterCard value="h" />
        <CharacterCard value="i" />
      </div>
    );
  }
}
