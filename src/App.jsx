// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
