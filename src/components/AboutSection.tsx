import React from 'react';
import './AboutSection.css';
import { FiMusic, FiMapPin, FiCpu } from 'react-icons/fi';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Sobre mí</h2>
                    <div className="section-line"></div>
                </div>

                <div className="about-content">
                    <div className="about-text glass">
                        <p>
                            Soy un desarrollador por convicción. Me apasiona el ritmo y la estructura, tanto en la música como en el código.
                            Disfruto vivir en el Caribe conectando la tecnología con la economía local y siempre estoy buscando el próximo
                            problema real que resolver con software.
                        </p>
                        <p>
                            Mi enfoque es construir experiencias digitales que no solo se vean increíbles, sino que aporten un valor real
                            a los negocios, optimizando sus operaciones con una visión de producto clara.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card glass hover-lift">
                            <div className="card-icon">
                                <FiMapPin />
                            </div>
                            <h3>Base en Bacalar</h3>
                            <p>Inmerso en el ecosistema de Quintana Roo, combinando el trabajo remoto con la promoción del turismo local.</p>
                        </div>
                        <div className="about-card glass hover-lift delay-1">
                            <div className="card-icon">
                                <FiMusic />
                            </div>
                            <h3>Techno & Vibra</h3>
                            <p>El ritmo del Techno me impulsa cuando escribo código. La música es la gasolina para esas largas sesiones de desarrollo.</p>
                        </div>
                        <div className="about-card glass hover-lift delay-2">
                            <div className="card-icon">
                                <FiCpu />
                            </div>
                            <h3>Resolución Real</h3>
                            <p>Desarrollo soluciones para negocios físicos conectándolos mediante SaaS, integraciones de pago y estrategias de marketing de guerrilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
