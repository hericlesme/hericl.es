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
import Link from './components/Link/Link';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={profile} />
        <div className="headline">
          <h1 className="title">Hello! I'm Héricles.</h1>
          <h2>
            A curious software enginner trying to build the future I want to live.
          </h2>
        </div>
      </div>
      <div className="links">
        <Link link="https://github.com/hericlesme" Image={Github} name="GitHub" />
        <Link link="https://linkedin.com/in/hericlesme" Image={Linkedin} name="LinkedIn" />
        <Link link="https://twitter.com/hericlesme" Image={Twitter} name="Twitter" />
        <Link link="https://behance.net/hericlesme" Image={Behance} name="Behance" />
        <Link link="https://dribbble.com/hericlesme" Image={Dribbble} name="Dribbble" />
        <Link link="https://instagram.com/hericlesme" Image={Instagram} name="Instagram" />
      </div>
      <div className="about">
        <h2>
          About
        </h2>
        <p>
          My name is Héricles Emanuel, from Campina Grande, Brazil. I have been working with development since 2017. I am also a co-organizer of GDG Campina Grande (Google Developer Group).
        </p>
        <p>
          I currently work at the Distributed Systems Laboratory, at UFCG and I am Core Contributor of the OpenMined organization on GitHub.
        </p>
        <p>
          I worked a lot in the last years with Web and Mobile development, UX design and software development, mainly in Python and Javascript.
        </p>
        <p>
          I am interested in topics such as UI / UX Design, Artificial Intelligence, Security, Privacy and DevOps.
        </p>
      </div>
      <footer>
        <p>2020 © Héricles Emanuel. All rights reserved.</p>
      </footer>
    </div >
  );
}

export default App;
