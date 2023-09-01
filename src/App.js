import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import './App.css';

function App() {
  return (
    <div id="App">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;