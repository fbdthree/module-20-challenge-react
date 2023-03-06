import React from 'react';
import picture from '../assets/images/IMG_1105.jpeg'
function About() {
  return (
    <main className="page-section">
        <h1>Contact Me</h1>




    <section className="about">
      <h2>About Me</h2>
      <img
        src={picture}
        alt="of Pompano Beach"
        width="300"
      />
      <p>
        My name is Braden Dawson, and I am a full-stack web-developer. After
        working in the food and beverage industry for over 20 years, I decided to
        become a web-developer once my girlfriend's business exploded after she
        built a website with a web developer. My goal is to showcase my
        professional portfolio in order to obtain an entry-level
        web-developement position using the knowledge and skills I learned while
        attending the University of Miami's Coding Bootcamp.
      </p>
    </section>
    </main>  );
}




export default About;