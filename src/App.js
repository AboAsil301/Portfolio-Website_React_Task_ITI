// App.js
import React from 'react';
import './App.css';



import Hero from './components/Hero/Hero';
import Bio from '../src/components/Bio/Bio';
import Skills from '../src/components/Skills/Skills';
import Education from '../src/components/Education/Education';  
import Contact from '../src/components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
