import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About The Developers</h1>
      
      <div className="team">
        <div className="member">
          <h3>Sara</h3>
          <p>Role: Frontend Developer</p>
          <p>Responsible for UI components, routing, and API integration</p>
        </div>
        
        <div className="member">
          <h3>Bayan</h3>
          <p>Role: Backend Developer</p>
          <p>Responsible for server setup, API endpoints, and business logic</p>
        </div>
        
        <div className="member">
          <h3>Fatma</h3>
          <p>Role: Database Designer</p>
          <p>Responsible for MongoDB schema, collections, and data validation</p>
        </div>
      </div>
      
      <div className="references">
        <h2>References</h2>
        <ul>
          <li>MDN Web Docs - https://developer.mozilla.org/</li>
          <li>React Documentation - https://react.dev/</li>
          <li>MongoDB Documentation - https://www.mongodb.com/docs/</li>
          <li>Express.js Guide - https://expressjs.com/</li>
          <li>Node.js Documentation - https://nodejs.org/</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
