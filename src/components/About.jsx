import React from 'react';
import profilePic from '../assets/profile.png';
// adjust if image is in a different path

function About() {
  return (
    <section className="about">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>Myre Lector Andre M. Morada</h2> {/* <-- Replace with your name */}
      <p>
        I'm a passionate computer science student eager to build user-friendly websites and applications. I enjoy learning new technologies and solving real-world problems through code.
      </p>
    </section>
  );
}

export default About;
