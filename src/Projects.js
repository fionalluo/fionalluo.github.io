import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure styles are consistent

function Projects() {
    return (
        <div className="container">
            <header className="App-header">
                <div className="name">
                    <Link to="/" className="name-link">Fiona Luo</Link>
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
            </div>
            </header>
        </div>
    );
}

export default Projects;
