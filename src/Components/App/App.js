import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import Checkbox from '../Checkbox/Checkbox';
import logo from '../../Static/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <SVG src={logo}/>
        </header>
        <main className="App-wrapper">
          <Checkbox label='React' selected={true}/>
          <Checkbox label='Redux' selected={false}/>
          <Checkbox label='Jest' selected={true}/>
          <Checkbox label='Webpack' selected={true}/>
        </main>
      </div>
    );
  }
}

export default App;
