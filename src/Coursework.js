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
                    ~ = current <br />
                    + = advanced placement
                </p>

                <h2 className="section-title">Computer Science and Math</h2>
                <ul className="course-list">
                    <li><strong>*ESE 5460</strong> - Principles of Deep Learning</li>
                        <ul className="sub-list">
                            <li>Teaching Assistant (Fall 2024)</li>
                        </ul>
                    <li><strong>~*CIS 6250</strong> - Theory of Machine Learning</li>
                    <li><strong>*CIS 5050</strong> - Distributed Systems</li>
                    <li><strong>*CIS 5710</strong> - Computer Organization and Design</li>
                    <li><strong>*CIS 5480</strong> - Operating Systems Design and Implementation</li>
                    <li><strong>*CIS 5500</strong> - Database and Information Systems</li>
                    <li><strong>*CIS 5200</strong> - Machine Learning</li>
                    <li><strong>*CIS 7000</strong> - Vision-Based Robot Learning</li>
                    <li><strong>*CIS 4600</strong> - Computer Graphics</li>
                    <li><strong>*CIS 4210</strong> - Artificial Intelligence</li>
                    <li><strong>~CIS 4100</strong> - Senior Thesis</li>
                    <li><strong>CIS 3200</strong> - Algorithms</li>
                    <li><strong>CIS 2620</strong> - Automata, Computability, and Complexity</li>
                    <li><strong>CIS 2400</strong> - Computer Systems</li>
                    <li><strong>NETS 2120</strong> - Scalable and Cloud Computing</li>
                    <li><strong>CIS 1210</strong> - Data Structures and Algorithms</li>
                        <ul className="sub-list">
                            <li>Teaching Assistant (Fall 2022 - Spring 2024)</li>
                        </ul>
                    <li><strong>CIS 1600</strong> - Math Foundations of Computer Science</li>
                    <li><strong>CIS 1200</strong> - Programming Languages and Techniques</li>
                    <li><strong>STAT 4300</strong> - Probability</li>
                    <li><strong>STAT 4310</strong> - Statistical Inference</li>
                    <li><strong>STAT 4330</strong> - Stochastic Processes</li>
                    <li><strong>+MATH 1400</strong> - Calculus I</li>
                    <li><strong>MATH 1410</strong> - Calculus II</li>
                    <li><strong>MATH 2400</strong> - Calculus III</li>
                    <li><strong>MATH 3120</strong> - Linear Algebra</li>
                    <li><strong>~MATH 3600</strong> - Real Analysis</li>
                </ul>

                <h2 className="section-title">Other</h2>
                <ul className="course-list">
                    <li><strong>ECON 0100</strong> - Microeconomics</li>
                    <li><strong>BEPP 2500</strong> - Managerial Economics</li>
                    <li><strong>MGMT 1010</strong> - Intro to Management</li>
                    <li><strong>EAS 2030</strong> - Engineering Ethics</li>
                    <li><strong>~*EAS 5120</strong> - Engineering Negotiation</li>
                    <li><strong>*OIDD 4150</strong> - Product Design</li>
                    <li><strong>DSGN 0010</strong> - Art, Design and Digital Culture</li>
                    <li><strong>WRIT 0150</strong> - The Politics of Design</li>
                    <li><strong>MUSC 1450</strong> - Songwriting</li>
                    <li><strong>+EAS 0910</strong> - Chemistry</li>
                    <li><strong>+SPAN 0202</strong> - Advanced Spanish</li>
                    <li><strong>+PHYS 0101</strong> - General Physics: Mechanics, Heat, Sound</li>
                    <li><strong>+PHYS 0150</strong> - Principles of Physics I: Mechanics</li>
                    <li><strong>+PHYS 0151</strong> - Principles of Physics II: Electromagnetism</li>
                </ul>
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
        </div>
    );
}

export default Coursework;
