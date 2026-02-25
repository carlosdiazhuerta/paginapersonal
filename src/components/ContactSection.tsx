import React from 'react';
import './ContactSection.css';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-card glass text-center">
                    <h2 className="contact-title">¿Listo para conectar tecnología y negocio?</h2>
                    <p className="contact-subtitle">
                        Ya sea que necesites una arquitectura escalable, un SaaS completo o digitalizar la operativa de un ecosistema turístico/gastronómico, estoy disponible para nuevos retos.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:franciscodiazhuerta97@gmail.com" className="contact-item hover-lift">
                            <div className="contact-icon">
                                <FiMail />
                            </div>
                            <span>franciscodiazhuerta97@gmail.com</span>
                        </a>

                        <a href="tel:+522217359367" className="contact-item hover-lift">
                            <div className="contact-icon">
                                <FiPhone />
                            </div>
                            <span>+52 (221) 735-9367</span>
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/carlosdiazhuerta" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/francisco-diaz-2a7075275/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FiLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer text-center">
                <p>© {new Date().getFullYear()} Francisco Diaz. Desarrollado con ⚛️ React, TypeScript & Vainilla CSS.</p>
                <p className="author-note">Viviendo en el Caribe, con ritmo Techno 🎵</p>
            </footer>
        </section>
    );
};

export default ContactSection;
