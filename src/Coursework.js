import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure styles are consistent

function Coursework() {
    return (
        <div className="container">
            <header className="App-header">
                <div className="name">
                    <Link to="/" className="name-link">Fiona Luo</Link>
                </div>
            </header>

            <div className="coursework-content">
                <h1 className="title">UPenn Coursework</h1>
                <p className="coursework-note">
                    * = graduate level <br />
                    ~ = current
                </p>

                <h2 className="section-title">Computer Science and Math</h2>
                <ul className="course-list">
                    {/* Add your bullet list items here */}
                </ul>

                <h2 className="section-title">Other</h2>
                <ul className="course-list">
                    {/* Add your bullet list items here */}
                </ul>
            </div>
        </div>
    );
}

export default Coursework;
