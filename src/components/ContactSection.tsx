import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiCode, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
            {/* Spectacular Background Glows */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container relative z-10 px-6 mx-auto max-w-4xl">
                <motion.div
                    className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none"></div>

                    <div className="text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">¿Tienes un proyecto, o un puesto vacante?</h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Actualmente estoy abierto tanto a oportunidades como <strong className="text-white">Frontend / Fullstack Developer</strong> en empresas de producto, como a proyectos de <strong className="text-white">Consultoría & Desarrollo Freelance</strong>.
                        </p>

                        {/* Hybrid Layout: Two Columns for the two distinct paths */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">

                            {/* Path 1: Recruiter / Job Seeking */}
                            <motion.div
                                className="bg-white/5 border border-cyan-500/30 rounded-2xl p-8 transition-all hover:bg-white/10 relative overflow-hidden group"
                                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)" }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                                <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
                                    <FiCode className="text-cyan-400" /> Reclutadores & CTOs
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Busco unirme a un equipo donde pueda aportar mi experiencia en React, TypeScript y Firebase para construir productos escalables y mejorar la experiencia de usuario.
                                </p>
                                <ul className="text-sm text-gray-300 space-y-2 mb-6 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Disponibilidad Inmediata</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Remoto / Híbrido</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Trabajo en equipo & Metodologías Ágiles</li>
                                </ul>
                                <a
                                    href="mailto:franciscodiazhuerta97@gmail.com"
                                    className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white px-5 py-2.5 rounded-xl transition-all font-bold text-sm w-full justify-center"
                                >
                                    <FiMail /> Enviar Correo
                                </a>
                            </motion.div>

                            {/* Path 2: Clients / Freelance */}
                            <motion.div
                                className="bg-white/5 border border-fuchsia-500/30 rounded-2xl p-8 transition-all hover:bg-white/10 relative overflow-hidden group"
                                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(217, 70, 239, 0.1)" }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition-all"></div>
                                <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
                                    <FiTrendingUp className="text-fuchsia-400" /> Clientes & Negocios
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Digitalizo la operativa de tu negocio. Desde landings enfocadas a conversión, plataformas a medida o consultoría Growth Hacking B2B.
                                </p>
                                <ul className="text-sm text-gray-300 space-y-2 mb-6 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> Web Corporativa & E-commerce</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> Desarrollo de Apps (SaaS)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> SEO Técnico & Autoridad Digital</li>
                                </ul>
                                <a
                                    href="https://wa.me/522217359367"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white px-5 py-2.5 rounded-xl transition-all font-bold text-sm w-full justify-center"
                                >
                                    <FaWhatsapp /> Agendar Consulta Gratuita
                                </a>
                            </motion.div>

                        </div>

                        {/* General Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 border-t border-white/10 pt-12">
                            <motion.a
                                href="mailto:franciscodiazhuerta97@gmail.com"
                                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 px-6 py-3 rounded-2xl"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-all text-lg">
                                    <FiMail />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-sm text-gray-400">Escríbeme un correo</span>
                                    <span className="text-white font-medium">franciscodiazhuerta97@gmail.com</span>
                                </div>
                            </motion.a>
                        </div>

                        <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-8 mt-8">
                            {[
                                { icon: <FiGithub />, href: "https://github.com/carlosdiazhuerta", label: "GitHub", hoverClass: "hover:bg-gray-100 hover:text-black", borderHover: "hover:border-gray-100/50" },
                                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/francisco-diaz-2a7075275/", label: "LinkedIn", hoverClass: "hover:bg-[#0077b5] hover:text-white", borderHover: "hover:border-[#0077b5]/50" },
                                { icon: <FiInstagram />, href: "https://instagram.com/_paco_diaz", label: "Instagram", hoverClass: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white", borderHover: "hover:border-fuchsia-500/50" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-400 transition-all duration-300 ${social.hoverClass} ${social.borderHover}`}
                                    aria-label={social.label}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 text-center text-gray-500 text-sm">
                <p className="mb-2">© {new Date().getFullYear()} Francisco Diaz. Desarrollado con React, TypeScript & Tailwind CSS.</p>
                <p className="text-cyan-500/80 font-medium">Viviendo en el Caribe, con ritmo Techno 🎵</p>
            </footer>
        </section>
    );
};

export default ContactSection;
