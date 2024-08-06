import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import profilePic from './profile-pic-2.jpg'; // Ensure you have your picture file
import Coursework from './Coursework'; // Import the new Coursework component

function Home() {
  return (
    <div className="container">
      <header className="App-header">
        <div className="name"><Link to="/" className="name-link">Fiona Luo</Link></div>
        <div className="intro-container">
          <div className="intro">
            I am a senior at the University of Pennsylvania pursuing a B.S.E. and M.S.E. 
            in computer science (coursework <Link to="/coursework">here</Link>). I'm broadly interested in 
            artificial intelligence, reinforcement learning, and NLP.
            <br></br><br></br>
            Currently conducting research within the <a href="https://www.grasp.upenn.edu/" target="_blank">GRASP Laboratory</a> and <a href="https://nlp.cis.upenn.edu/" target="_blank">Penn NLP</a> + 
            writing a related senior thesis.
          </div>
          <img src={profilePic} alt="Fiona Luo" className="profile-pic" />
        </div>
        <div className="past-work">
          Some things I worked on in the past:
        </div>
        <ul className="work-list">
          <li><a href="https://www.twosigma.com/" target="_blank">Two Sigma</a>
          : developed factor pnl tool for factor-based modeling and analysis within 
          Systematic Macro; created Kafka management system to process firm-wide exceptions
          </li>
          <li><a href="https://aws.amazon.com/" target="_blank">Amazon Web Services</a>
          : built audit trail on AWS's international ticket management service
          </li>
          <li><a href="https://www.grasp.upenn.edu/" target="_blank">Penn GRASP Laboratory</a>
          : develop RL algorithms and multimodal models for robot learning in 
          the <a href="https://www.seas.upenn.edu/~dineshj/pal/index.html" target="_blank">Perception, Action, and Learning Group</a>
          </li>
          <li><a href="https://nlp.cis.upenn.edu/" target="_blank">Penn NLP Group</a>
          : evaluate multilingual bias of LLMs, implement information retrieval systems for 
          retrieval augmented generation
          </li>
          <li><a href="https://www.cis.upenn.edu/" target="_blank">Penn CIS</a>
          : teach graduate-level deep learning, data structures and algorithms
          </li>
          <li><a href="https://wics.cis.upenn.edu/" target="_blank">Penn Women in Computer Science</a>
          : co-president; lead initiatives to support women in tech
          </li>
          <li><a href="https://summerscience.org/" target="_blank">Summer Science Program</a>
          : determined orbit of mars-crossing asteroid via method of Gauss
          </li>
        </ul>
        <div className="hobbies">
          Outside of CS, I enjoy creating <a href="https://www.behance.net/fionalluo" target="_blank">art</a> and playing the piano.
        </div>
        <br></br>
        <div className="contact">
          Resume available upon request. If you have any questions or would like to chat, feel free to reach out.
        </div>
        <div className="social-media">
          <a href="mailto:fionaluo@seas.upenn.edu" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.png" alt="Email" className="social-icon" />
          </a>
          <a href="https://github.com/fionalluo" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/fionalluo" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://weixin.qq.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/wechat.png" alt="WeChat" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/fionalluo" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursework" element={<Coursework />} />
      </Routes>
    </Router>
  );
}

export default App;
