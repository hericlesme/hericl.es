import React from 'react';
import './App.css';
import profile from './assets/profile.jpg';
import {
  Github,
  Linkedin,
  Twitter,
  Behance,
  Dribbble,
  Instagram
} from './components/svg';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={profile}/>
        <div className="headline">
          <p className="title">Hello! I'm Héricles.</p>
          <p>
          A curious software enginner trying to build the future I want to live.
          </p>
        </div>
      </div>
      <div className="links">
          <a>
            <Github/>
            GitHub
          </a>
          <a>
            <Linkedin/>
            LinkedIn
            </a>
          <a>
            <Twitter/>
            Twitter
            </a>
          <a>
            <Behance/>
            Behance
            </a>
          <a>
            <Dribbble/>
            Dribbble
            </a>
          <a>
            <Instagram/>
            Instagram
            </a>
      </div>
      <div className="about">

      </div>
    </div>
  );
}

export default App;
