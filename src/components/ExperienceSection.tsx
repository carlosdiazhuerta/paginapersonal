import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
    // ...experiences array...
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
            title: 'SniperLeads (LeadForge)',
            role: 'Collaborator & Product Designer',
            period: '2025 – Presente',
            description: 'Solución de inteligencia de ventas B2B escalada de herramienta interna a un SaaS independiente para el mercado de PyMEs en México.',
            achievements: [
                'Innovación de Producto: Co-desarrollo estratégico para capturar negocios sin presencia en plataformas corporativas tradicionales.',
                'Arquitectura de Datos y UX: Liderazgo en diseño UI/UX y extracción, capturando 15+ puntos accionables por lead (WhatsApp, Instagram, ubicación) a gran escala.',
                'Estrategia de Posicionamiento: Expansión estructurada de la base de datos a 28+ ciudades estratégicas enfocada en conversión inmediata.',
                'Impacto Tecnológico: Implementación de Score de IA (1-10) para calificar automáticamente leads y optimizar el tiempo de prospección B2B.'
            ],
            stack: ['UX/UI', 'Data Architecture', 'AI Scoring', 'Product Strategy', 'SaaS'],
            link: 'https://leadforge--leadforge-prod.us-east4.hosted.app/'
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
        <section id="experience" className="relative py-24 bg-black overflow-hidden">
            {/* Spectacular Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="container relative z-10 px-6 mx-auto max-w-5xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Experiencia & Proyectos</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>

                            {/* Card Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-500/50 hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                                        <h4 className="text-lg font-medium text-fuchsia-400">{exp.role}</h4>
                                    </div>
                                    <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {exp.achievements.map((item, i) => {
                                        const [boldPart, ...rest] = item.split(': ');
                                        return (
                                            <li key={i} className="flex text-sm text-gray-300">
                                                <span className="text-cyan-500 mr-2">▹</span>
                                                <span>
                                                    <strong className="text-gray-200">{boldPart}:</strong> {rest.join(': ')}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map(tech => (
                                            <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-transparent rounded-lg px-4 py-2 transition-all duration-300 shrink-0"
                                    >
                                        <FiExternalLink /> Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
