import React from 'react';
import './SkillsSection.css';
import { FiCode, FiDatabase, FiSettings, FiStar } from 'react-icons/fi';

const SkillsSection: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend & UI',
            icon: <FiCode />,
            skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vanilla CSS', 'HTML5']
        },
        {
            title: 'Backend & Cloud',
            icon: <FiDatabase />,
            skills: ['Firebase (Firestore, Auth, Functions)', 'Node.js', 'REST APIs', 'Serverless Architecture']
        },
        {
            title: 'Herramientas & Ecosistema',
            icon: <FiSettings />,
            skills: ['Git / GitHub', 'Vercel (CI/CD)', 'Figma', 'Stripe Integration', 'SEO Técnico', 'i18n']
        },
        {
            title: 'Aptitudes (Soft Skills)',
            icon: <FiStar />,
            skills: ['Autogestión', 'Trabajo Remoto', 'Visión de Producto', 'Resolución de Problemas', 'Comunicación Asíncrona']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Habilidades & Aptitudes</h2>
                    <div className="section-line"></div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-card glass hover-lift">
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
