import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <section id='main' >
        <Nav/>
        <div className='overlay'>
        <div id='headerbox'>
          <h1>Tiarra Johannas Stout</h1>
          <p>Web Developer Specializing in React</p>
          <div id='links'>
            <a href='#'>About</a>
            <a href='#'>Skills</a>
            <a href='#'>Projects</a> 
          </div> 
        </div> 
          <About/>
          <Skills/>
        </div>
      </section>
    );
  }
}

export default App;
