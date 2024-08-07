import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure styles are consistent

const projects = [
    {
        imgSrc: '/imgs/success.png', // Replace with your image path
        title: 'Vision-Language Models for Robot Success Detection',
        description: 'Built few-shot VLM success detector; analyzed co-finetuning, visual and language robustness. Published at the Undergraduate Consortium of AAAI-24.',
        skills: ['pytorch', 'python', 'NLP']
    },
    {
        imgSrc: '/imgs/minecraft.png', // Replace with your image path
        title: 'Mini-Minecraft',
        description: '3D-voxel engine recreating fully-playable Minecraft with OpenGL. Includes player physics, multithreaded chunking, terrain noise functions, cave systems, texturing, biomes, shadow mapping, and NPCs.',
        skills: ['C++', 'OpenGL', 'computer graphics']
    },
    {
        imgSrc: '/imgs/penncloud.png', // Replace with your image path
        title: 'PennCloud',
        description: 'Distributed cloud platform with email and drive, implementing a scalable, fault-tolerant key-value store and a multithreaded web server with HTTP, cookie handling, load-balancing, data-replication',
        skills: ['C++', 'gRPC', 'distributed systems']
    },
    {
        imgSrc: '/imgs/pennos.png', // Replace with your image path
        title: 'PennOS',
        description: 'Linux-based operating system in C with multilevel scheduler; processes simulated with threads managed by PCB, signals, and self- written kernel functions; virtual FAT file system; shell with redirection, synchronous signal handling and unix commands',
        skills: ['C', 'operating systems']
    },
    {
        imgSrc: '/imgs/pennbook.png', // Replace with your image path
        title: 'PennBook',
        description: 'Facebook clone with live news adsorption recommendation (based on PageRank), user login, personal walls, chat, friends, search',
        skills: ['Java', 'Apache Spark', 'React']
    },
    {
        imgSrc: '/imgs/orbit.jpg', // Replace with your image path
        title: 'Orbital Determination of Asteroid 1988 DZ4',
        description: "Determined orbit of asteroid 10737 Brück via Gauss' method using CCD imaging data and astrometry processes; published astronomical data in the International Astronomical Union’s Minor Planet Circulars (M.P.C.)",
        skills: ['python', 'monte carlo', 'astrometry']
    },
    {
        imgSrc: '/imgs/peptide.png', // Replace with your image path
        title: 'QSAR-based Identification of Novel Antimicrobial Peptides',
        description: 'Built QSAR machine learning model to identify antimicrobial and anti-HIV peptide physicochemical features using public peptide databases; applied LSTM network to generate novel sequences. (Picture is of predicted peptide.)',
        skills: ['python', 'keras', 'java']
    },
    {
        imgSrc: '/imgs/mario.png', // Replace with your image path
        title: 'Rasterizer and GLSL Shaders',
        description: 'Built rasterizer for 2D and 3D polygon rendering with perspective projection camera. Implemented custom GLSL shaders: Blinn-Phong, matcap, Sobel, and Gaussian blur, vertex deformation.',
        skills: ['C++', 'OpenGL']
    },
    {
        imgSrc: '/imgs/cow.png', // Replace with your image path
        title: 'Maya Mesh Editor',
        description: 'Created half-edge mesh data structure visualized with OpenGL vertex buffers. Implemented Catmull-Clark subdivision algorithm for mesh smoothing and added mesh editing operations, including face extrusions and sharpness adjustments.',
        skills: ['C++', 'OpenGL']
    },
];

function Projects() {
    return (
        <div className="container">
            <header className="App-header">
                <div className="header-top">
                    <div className="name">
                        <Link to="/" className="name-link">Fiona Luo</Link>
                    </div>
                    <div className="projects-link">
                        <Link to="/projects" className="name-link">Projects</Link>
                    </div>
                </div>
            </header>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-cell">
                        <img src={project.imgSrc} alt={project.title} className="project-img" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-skills">
                            {project.skills.map((skill, idx) => (
                                <span key={idx} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
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

export default Projects;
