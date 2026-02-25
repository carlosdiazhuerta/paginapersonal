import React from 'react';
import './HeroSection.css';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <p className="hero-subtitle text-gradient">HOLA, SOY</p>
                    <h1 className="hero-title">Francisco Diaz</h1>
                    <h2 className="hero-role">Desarrollador y Emprendedor Digital</h2>
                    <p className="hero-description">
                        Con base en Bacalar, México. Especialista en crear soluciones tecnológicas que conectan negocios físicos con el mundo digital, utilizando stacks modernos y un enfoque en la experiencia del usuario (UX) y marketing táctico.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            Ver Proyectos <FiArrowRight className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-secondary glass">
                            Hablemos
                        </a>
                    </div>
                </div>
                <div className="hero-visual glass animate-fade-in delay-1">
                    <div className="code-block">
                        <pre>
                            <code>
                                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                                <br />
                                &nbsp;&nbsp;name: <span className="code-string">'Francisco Diaz'</span>,
                                <br />
                                &nbsp;&nbsp;location: <span className="code-string">'Bacalar, MX'</span>,
                                <br />
                                &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Next.js'</span>, <span className="code-string">'Firebase'</span>],
                                <br />
                                &nbsp;&nbsp;passion: <span className="code-string">'Techno & Code'</span>
                                <br />
                                {'};'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
