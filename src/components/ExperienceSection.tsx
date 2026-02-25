import React from 'react';
import './ExperienceSection.css';
import { FiExternalLink } from 'react-icons/fi';

const ExperienceSection: React.FC = () => {
    const experiences = [
        {
            title: 'Growth Restaurant S.A.S.',
            role: 'Fundador & Desarrollador Full Stack',
            period: 'Enero 2024 – Presente',
            description: 'Desarrollo técnico y estrategia de producto de una plataforma SaaS legalmente constituida para el sector gastronómico.',
            achievements: [
                'Arquitectura: Diseño y desarrollo de una SPA mediante Next.js y React, enfocada en la gestión de menús digitales y reputación online.',
                'Backend Serverless: Implementación de Firebase (Firestore, Auth, Functions) para manejar la autenticación y bases de datos en tiempo real.',
                'Analítica: Integración de dashboards con métricas de comportamiento de usuarios para restaurantes.'
            ],
            stack: ['Next.js', 'React', 'Firebase', 'SaaS', 'Serverless'],
            link: 'https://growthrestaurant.app'
        },
        {
            title: 'Tours Bacalar',
            role: 'Lead Developer & Arquitecto Web',
            period: 'Noviembre 2025 – Presente',
            description: 'Desarrollo integral y operación de toursbacalar.online, plataforma e-commerce multilingüe líder en turismo local.',
            achievements: [
                'Alto Rendimiento: Construcción de PWA optimizada con Next.js (SSR), logrando cargas instantáneas y excelente SEO.',
                'Internacionalización (i18n): Soporte en Español, Inglés, Francés, Alemán para mercados turísticos globales.',
                'Omnicanalidad: Integración de la experiencia digital con el mundo físico mediante códigos QR en banners y gestión de Google Business.'
            ],
            stack: ['Next.js', 'Firebase', 'i18n', 'SEO', 'E-commerce'],
            link: 'https://toursbacalar.online'
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Experiencia & Proyectos</h2>
                    <div className="section-line"></div>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card glass">
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-title">{exp.title}</h3>
                                    <h4 className="exp-role">{exp.role}</h4>
                                </div>
                                <span className="exp-period">{exp.period}</span>
                            </div>

                            <p className="exp-description">{exp.description}</p>

                            <ul className="exp-achievements">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="exp-footer">
                                <div className="exp-stack">
                                    {exp.stack.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <a href={exp.link} target="_blank" rel="noreferrer" className="btn btn-secondary exp-link">
                                    <FiExternalLink /> Ver Proyecto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
